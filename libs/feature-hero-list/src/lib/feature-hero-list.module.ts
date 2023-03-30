import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  }
];

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HeroesComponent]
})
export class FeatureHeroListModule {

  // Routed modules must only be loaded once!!!
  private static loaded = false;

  constructor() {
    if (FeatureHeroListModule.loaded) {
      throw new Error('FeatureHeroListModule already loaded.');
    }
    FeatureHeroListModule.loaded = true;
  }
}
