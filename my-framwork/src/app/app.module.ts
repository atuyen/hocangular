import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';

import { appReducer } from '@core/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '@core/store/app.effects';



@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    // CalendarModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    NgHttpLoaderModule.forRoot(),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(AppEffects)
  ],
  providers: [ AppSettings ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
