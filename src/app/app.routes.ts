import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.page').then( m => m.ProdutosPage)
  },
  {
    path: 'materiais',
    loadComponent: () => import('./materiais/materiais.page').then( m => m.MateriaisPage)
  },
  {
    path: 'r-produtos',
    loadComponent: () => import('./r-produtos/r-produtos.page').then( m => m.RProdutosPage)
  },
  {
    path: 'r-materiais',
    loadComponent: () => import('./r-materiais/r-materiais.page').then( m => m.RMateriaisPage)
  },
  {
    path: 'v-produto',
    loadComponent: () => import('./v-produto/v-produto.page').then( m => m.VProdutoPage)
  },
  {
    path: 'v-material',
    loadComponent: () => import('./v-material/v-material.page').then( m => m.VMaterialPage)
  },
];
