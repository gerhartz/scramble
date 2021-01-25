import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'resource-modal',
    loadChildren: () => import('./modals/resource-modal/resource-modal.module').then( m => m.ResourceModalPageModule)
  },
  {
    path: 'progress-modal',
    loadChildren: () => import('./modals/progress-modal/progress-modal.module').then( m => m.ProgressModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
