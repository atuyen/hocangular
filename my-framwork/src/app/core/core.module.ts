import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TokenInterceptor } from './interceptor/token.interceptor';
// import { AuthenService } from './services/authen.service';
// import { DataService } from './services/data.service';
// import { LoggerService } from './services/logger.service';
// import { NotificationService } from './services/notification.service';
// import { UtilityService } from './services/utility.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    // LoggerService,
    // AuthenService,
    // DataService,
    // NotificationService,
    // UtilityService,
    // NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }
