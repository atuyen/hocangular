import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../theme/theme.module';
import { PositionsRoutingModule } from './postions-routing.module';



@NgModule({
  declarations: [
    PositionsRoutingModule.components,
  ],
  imports: [
    PositionsRoutingModule,
    SharedModule,
    ThemeModule
  ]
})
export class PositionsModule { }
