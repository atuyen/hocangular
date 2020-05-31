import { Events } from './../../../core/services/event-bus.service';
import { EventBusService, EmitEvent } from '@core/services';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';
import { Subject } from 'rxjs';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ],
  animations: [
    trigger('showInfo', [
      state('1' , style({ transform: 'rotate(180deg)' })),
      state('0', style({ transform: 'rotate(0deg)' })),
      transition('1 => 0', animate('400ms')),
      transition('0 => 1', animate('400ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  public showHorizontalMenu = true;
  public showInfoContent = false;
  public settings: Settings;
  public menuItems: Array<any>;

  search$ = new Subject<string>();



  constructor(public appSettings: AppSettings,
    public menuService: MenuService,
    private eventBusService: EventBusService) {
      this.settings = this.appSettings.settings;
      this.menuItems = this.menuService.getHorizontalMenuItems();
  }


  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.showHorizontalMenu = false;
    }

    this.search$
    .pipe(
      throttleTime(100), // ===> sau 100ms moi emit gia tri moi nhat ra, de han che bot luong data
      distinctUntilChanged(),
      // ==>Se khong emit ra gia tri neu gia tri ko doi so voi truoc do ,han che viec nguoi dung them roi lai xoa 1 ky tu,
    )
    .subscribe(textSearch => {
      // day la ket qua search  cua api3
      this.eventBusService.emit(new EmitEvent(
        Events.searchData,
        textSearch
      ))
    })
  }


  public closeSubMenus() {
    const menu = document.querySelector('#menu0');
    if (menu) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < menu.children.length; i++) {
          const child = menu.children[i].children[1];
          if (child) {
              if (child.classList.contains('show')) {
                child.classList.remove('show');
                menu.children[i].children[0].classList.add('collapsed');
              }
          }
      }
    }
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
     if (window.innerWidth <= 768) {
        this.showHorizontalMenu = false;
     } else {
        this.showHorizontalMenu = true;
      }
  }

  seach(textSearch: string) {
    this.search$.next(textSearch);
  }


  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }


}
