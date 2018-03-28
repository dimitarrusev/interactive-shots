import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './modules';
import { RouteService, ShotService } from './services';
import { DeactivateGuard } from './guards';

export * from './modules';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  providers: [
    RouteService,
    ShotService,
    DeactivateGuard
  ],
  exports: [
    NavigationModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
