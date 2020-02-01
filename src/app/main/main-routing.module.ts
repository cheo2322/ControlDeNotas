import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'noticias',
        loadChildren: () => import('../main-tabs/noticias/noticias.module').then(m => m.NoticiasPageModule)
      },
      {
        path: '',
        loadChildren: () => import('../main-tabs/noticias/noticias.module').then(m => m.NoticiasPageModule),
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
