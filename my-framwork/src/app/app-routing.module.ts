import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login-reduct', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'login-reduct', loadChildren: () => import('./modules/login-reduct/login-reduct.module').then(m => m.LoginReductModule)
  },
  {
    path: 'positions', data: { preload: true },
    loadChildren: () => import('./modules/positions/positions.module').then(m => m.PositionsModule)
  },
  {
    path: 'learning',
    loadChildren: () => import('./modules/learning/learning.module').then(m => m.LearningModule)
  },
  {
    path: 'product',
    loadChildren: () => import ('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];






@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
    // preloadingStrategy: PreloadModulesStrategy ==> neu muon chi dinh ro module nao preload module nao khong
  }),
  ],
  exports: [RouterModule],
  providers: [
    PreloadModulesStrategy
  ]
})
export class AppRoutingModule {
  static components = [
    NotFoundComponent
  ];
}
