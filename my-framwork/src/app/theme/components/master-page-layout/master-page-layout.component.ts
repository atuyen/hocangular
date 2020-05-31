
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-master-page-layout',
  templateUrl: './master-page-layout.component.html',
  styleUrls: ['./master-page-layout.component.scss']
})
export class MasterPageLayoutComponent implements OnInit {
  public showMenu = false;
  public showSetting = false;
  public menus = ['vertical', 'horizontal'];
  public menuOption: string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption: string;

  public settings: Settings;
  constructor(public appSettings: AppSettings, public router: Router) {
      this.settings = this.appSettings.settings;
      if (sessionStorage.skin) {
          this.settings.theme.skin = sessionStorage.skin;
      }
  }

  ngOnInit() {
      if (window.innerWidth <= 768) {
          this.settings.theme.showMenu = false;
          this.settings.theme.sideChatIsHoverable = false;
      }
      this.showMenu = this.settings.theme.showMenu;
      this.menuOption = this.settings.theme.menu;
      this.menuTypeOption = this.settings.theme.menuType;
  }

  public chooseMenu(menu) {
      this.settings.theme.menu = menu;
      this.router.navigate(['/']);
  }

  public chooseMenuType(menuType) {
      this.settings.theme.menuType = menuType;
      // if (menuType === 'mini') {
      //     jQuery('.menu-item-link').tooltip('enable');
      // } else {
      //     jQuery('.menu-item-link').tooltip('disable');
      // }
  }

  public changeTheme(theme) {
      this.settings.theme.skin = theme;
      sessionStorage.skin = theme;
  }



  // @HostListener('window:resize')
  public onWindowResize(): void {
      const showMenu = !this._showMenu();

      if (this.showMenu !== showMenu) {
          this.showMenuStateChange(showMenu);
      }
      this.showMenu = showMenu;
  }

  public showMenuStateChange(showMenu: boolean): void {
      this.settings.theme.showMenu = showMenu;
  }

  private _showMenu(): boolean {
      return window.innerWidth <= 768;
  }

}
