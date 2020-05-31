import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageLayoutComponent } from './../../theme/components/master-page-layout/master-page-layout.component';
import { CategoryListComponent } from './category-list/category-list.component';


const routes: Routes = [
  {path: '', component: MasterPageLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'category-list', pathMatch: 'full'
      },
      {
        path: 'category-list', component: CategoryListComponent
      }
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  static components = [
    CategoryListComponent
  ];
}
