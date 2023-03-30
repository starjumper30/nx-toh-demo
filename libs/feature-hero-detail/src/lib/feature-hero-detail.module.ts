import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  { path: '', component: HeroDetailComponent }
];

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [HeroDetailComponent]
})
export class FeatureHeroDetailModule {

  // Routed modules must only be loaded once!!!
  private static loaded = false;

  constructor() {
    if (FeatureHeroDetailModule.loaded) {
      throw new Error('FeatureHeroDetailModule already loaded.');
    }
    FeatureHeroDetailModule.loaded = true;
  }
}
