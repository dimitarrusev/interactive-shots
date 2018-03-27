import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatIconRegistry } from '@angular/material';

import { TodoRoutingModule } from './todo-routing.module';
import {
  TodoComponent,
  TodoRegisterComponent,
  TodoLoginComponent,
  TodoResetPasswordComponent,
  TodoTermsOfServiceComponent,
  TodoDashboardComponent,
  TodoFeaturesComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule, MatIconModule, MatTooltipModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoRegisterComponent,
    TodoLoginComponent,
    TodoResetPasswordComponent,
    TodoTermsOfServiceComponent,
    TodoDashboardComponent,
    TodoFeaturesComponent
  ]
})
export class TodoModule {
  constructor(private domSanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
    iconRegistry.addSvgIcon('play', domSanitizer.bypassSecurityTrustResourceUrl('assets/2do/icons/play.svg'));
    iconRegistry.addSvgIcon('replay', domSanitizer.bypassSecurityTrustResourceUrl('assets/2do/icons/replay.svg'));
  }
}
