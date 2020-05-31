import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Constants from '@core/contants';
import { IUserLogin } from '@core/models/user-login.model';
import { AuthenService } from '@core/services/authen.service';
import { NotificationService } from '@core/services/notification.service';


// import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  public router: Router;
  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;

  constructor(router: Router, fb: FormBuilder,
    private authenService: AuthenService,
    private notificationService: NotificationService) {
    this.router = router;
    this.form = fb.group({
      username: ['tuyen@gmail.com', Validators.compose([Validators.required])],
      password: ['123456', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.username = this.form.controls.username;
    this.password = this.form.controls.password;
  }

  // tslint:disable-next-line:ban-types
  public onSubmit(values: IUserLogin) {
    if (this.form.valid) {
      this.authenService.login(values)
        .subscribe(
          (res) => {
              this.router.navigate([Constants.AppUrl.LEARNING]);
          },
          (err) => {
             this.notificationService.printErrorMessage(Constants.Message.AUTHEN_FAILED);
          }
        )
    }
  }



}
