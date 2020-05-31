import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageLayoutComponent } from './../../theme/components/master-page-layout/master-page-layout.component';
import { PositionDetailComponent } from './position-detail/position-detail.component';
import { PositionListComponent } from './position-list/position-list.component';

const routings: Routes = [
  {
    path: '', component: MasterPageLayoutComponent,
    children: [
      {
        path: '', component: PositionListComponent
      },
      {
        path: 'detail', component: PositionDetailComponent
      }
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routings),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class PositionsRoutingModule {
  static components = [
    PositionListComponent,
    PositionDetailComponent
  ];

}
