import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatIconRegistry } from '@angular/material';

import { routes } from './todo.routes';
import {
  TodoComponent,
  TodoRegisterComponent,
  TodoLoginComponent,
  TodoResetPasswordComponent,
  TodoTermsOfServiceComponent,
  TodoDashboardComponent,
  TodoDashboardV2Component
} from './components';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule, MatIconModule, MatTooltipModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TodoComponent,
    TodoRegisterComponent,
    TodoLoginComponent,
    TodoResetPasswordComponent,
    TodoTermsOfServiceComponent,
    TodoDashboardComponent,
    TodoDashboardV2Component
  ]
})
export class TodoModule {
  constructor(private domSanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
    iconRegistry.addSvgIcon('play', domSanitizer.bypassSecurityTrustResourceUrl('assets/2do/icons/play.svg'));
    iconRegistry.addSvgIcon('replay', domSanitizer.bypassSecurityTrustResourceUrl('assets/2do/icons/replay.svg'));
  }
}
