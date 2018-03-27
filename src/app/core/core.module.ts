import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material';

import { DeactivateGuard } from './guards';
import { RouteService, ShotService } from './services';
import { NavigationComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule
  ],
  providers: [RouteService, ShotService, DeactivateGuard],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
