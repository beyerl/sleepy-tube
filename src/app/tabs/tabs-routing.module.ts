import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'player',
        loadChildren: () => import('../player/player.module').then(m => m.PlayerPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
      },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../player/player.module').then(m => m.PlayerPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/player',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
})
export class TabsPageRoutingModule { }
