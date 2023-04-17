import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'produtos',
        loadComponent: () =>
          import('../produtos/produtos.page').then((m) => m.ProdutosPage),
      },
      {
        path: 'materiais',
        loadComponent: () =>
          import('../materiais/materiais.page').then((m) => m.MateriaisPage),
      },
      {
        path: '',
        redirectTo: '/produtos/produtos.page',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/produtos/produtos.page',
    pathMatch: 'full',
  },
];
