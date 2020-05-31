import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ThemeModule } from './../../theme/theme.module';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsRoutingModule.components
  ],
  imports: [
    SharedModule,
    ThemeModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
