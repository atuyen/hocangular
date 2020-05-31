import { IAppState } from './../../core/store/app.state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, of, Subscription } from 'rxjs';
import { takeUntil, filter, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Login } from '@core/store/user/user.actions';
import { getLoadingLogin, getSuccessLogin, getFailLogin  } from '@core/store/user/user.selector';
@Component({
  selector: 'app-login-reduct',
  templateUrl: './login-reduct.component.html',
  styleUrls: ['./login-reduct.component.css'],
})
export class LoginReductComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  loading$: Observable<boolean>;
  success$: Observable<boolean>;
  successSub$: Subscription;
  error$: Observable<boolean>;
  destroy$: Subject<void> = new Subject();
  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading$ = this.store.select(getLoadingLogin).pipe(takeUntil(this.destroy$));
    this.success$ = this.store.select(getSuccessLogin).pipe(takeUntil(this.destroy$));
    this.error$ = this.store.select(getFailLogin).pipe(takeUntil(this.destroy$));


    this.initForm();
    this.onLoginSucess();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.successSub$.unsubscribe();
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }
  submit() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(new Login({ email, password }));
  }
  onLoginSucess() {
  this.successSub$ =  this.success$.pipe(
      filter(success => success),
      // đợi 3s sau khi login thành công,chuyển tới home page
      delay(3000),
    ).subscribe(success => {
      this.router.navigate(['/learning']);
    });
  }

}
