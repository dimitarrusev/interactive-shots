import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material';

import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './navigation-item';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule
  ],
  declarations: [
    NavigationComponent,
    NavigationItemComponent
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {}
