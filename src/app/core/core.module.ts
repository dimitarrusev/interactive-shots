import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteCommunicationService } from './services/route-communication.service';

@NgModule({
  imports: [CommonModule],
  providers: [RouteCommunicationService]
})
export class CoreModule {}
