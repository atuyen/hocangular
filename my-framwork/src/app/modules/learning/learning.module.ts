import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from './../../theme/theme.module';
import { LearningRoutingModule } from './learning-routing.module';


@NgModule({
  declarations: [LearningRoutingModule.components],
  imports: [
    SharedModule,
    ThemeModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
