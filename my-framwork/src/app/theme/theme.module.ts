import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { ApplicationsComponent } from '../theme/components/applications/applications.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { BlankComponent } from '../theme/components/blank/blank.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { FavoritesComponent } from '../theme/components/favorites/favorites.component';
import { FlagsMenuComponent } from '../theme/components/flags-menu/flags-menu.component';
import { FooterComponent } from '../theme/components/footer/footer.component';
import { FullScreenComponent } from '../theme/components/fullscreen/fullscreen.component';
import { HeaderComponent } from '../theme/components/header/header.component';
import { HorizontalMenuComponent } from '../theme/components/menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from '../theme/components/menu/vertical-menu/vertical-menu.component';
import { MessagesComponent } from '../theme/components/messages/messages.component';
import { SearchComponent } from '../theme/components/search/search.component';
import { SideChatComponent } from '../theme/components/side-chat/side-chat.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { UserMenuComponent } from '../theme/components/user-menu/user-menu.component';
import { PipesModule } from '../theme/pipes/pipes.module';
import { MasterPageLayoutComponent } from './components/master-page-layout/master-page-layout.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    MasterPageLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FlagsMenuComponent,
    SideChatComponent,
    FavoritesComponent,
    BlankComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,
    ToastrModule.forRoot(),
    NgbModule,
    MultiselectDropdownModule,
    PipesModule,
    RouterModule
  ],
})
export class ThemeModule { }
