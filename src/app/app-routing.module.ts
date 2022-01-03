import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SacolaGuard } from './guards/sacola.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cardapio',
    pathMatch: 'full'
  },
  {
    path: 'cardapio',
    loadChildren: () => import('./pages/cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./pages/restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./pages/produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'modal-tipo-entrega',
    loadChildren: () => import('./modals/modal-tipo-entrega/modal-tipo-entrega.module').then( m => m.ModalTipoEntregaPageModule)
  },
  {
    path: 'sacola',
    loadChildren: () => import('./pages/sacola/sacola.module').then( m => m.SacolaPageModule),
    canLoad: [SacolaGuard]
  },  {
    path: 'sacola-cliente',
    loadChildren: () => import('./pages/sacola-cliente/sacola-cliente.module').then( m => m.SacolaClientePageModule)
  },
  {
    path: 'sacola-entrega',
    loadChildren: () => import('./pages/sacola-entrega/sacola-entrega.module').then( m => m.SacolaEntregaPageModule)
  },
  {
    path: 'modal-loading-sacola',
    loadChildren: () => import('./modals/modal-loading-sacola/modal-loading-sacola.module').then( m => m.ModalLoadingSacolaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
