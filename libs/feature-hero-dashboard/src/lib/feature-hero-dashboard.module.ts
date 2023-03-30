import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureHeroSearchModule } from '@toh/feature-hero-search';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FeatureHeroSearchModule,
    RouterModule.forChild(routes)
  ]
})
export class FeatureHeroDashboardModule {

  // Routed modules must only be loaded once!!!
  private static loaded = false;

  constructor() {
    if (FeatureHeroDashboardModule.loaded) {
      throw new Error('FeatureHeroDashboardModule already loaded.');
    }
    FeatureHeroDashboardModule.loaded = true;
  }
}
