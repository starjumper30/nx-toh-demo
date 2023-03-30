import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { UiMessagesModule } from '@toh/ui-messages';
import { MainComponent } from './main.component';

const childRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('@toh/feature-hero-dashboard')
      .then(m => m.FeatureHeroDashboardModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('@toh/feature-hero-detail')
      .then(m => m.FeatureHeroDetailModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('@toh/feature-hero-list')
      .then(m => m.FeatureHeroListModule)
  }
];

const main: Route = {
  path: '',
  component: MainComponent,
  children: childRoutes
};

@NgModule({
  imports: [
    UiMessagesModule,
    CommonModule,
    RouterModule.forChild([main])
  ],
  declarations: [MainComponent]
})
export class FeatureHeroShellModule {

  // Routed modules must only be loaded once!!!
  private static loaded = false;

  constructor() {
    if (FeatureHeroShellModule.loaded) {
      throw new Error('FeatureHeroShellModule already loaded.');
    }
    FeatureHeroShellModule.loaded = true;
  }
}
