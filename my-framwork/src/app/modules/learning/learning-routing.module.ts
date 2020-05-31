import { SubcribleTemplateComponent } from './subcrible-template/subcrible-template.component';
import { Con2Component } from './contact/con2/con2.component';
import { Con1Component } from './contact/con1/con1.component';
import { ContactComponent } from './contact/contact.component';
import { CallApiComponent } from './call-api/call-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageLayoutComponent } from './../../theme/components/master-page-layout/master-page-layout.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '', component: MasterPageLayoutComponent,
    children: [
      { path: '', redirectTo: 'subcription', pathMatch: 'full'},
      { path: 'test', component: TestComponent },
      { path: 'call-api', component: CallApiComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'subcription', component: SubcribleTemplateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule {
  static components = [
    TestComponent,
    CallApiComponent,
    ContactComponent,
    Con1Component,
    Con2Component,
    SubcribleTemplateComponent
  ];
}
