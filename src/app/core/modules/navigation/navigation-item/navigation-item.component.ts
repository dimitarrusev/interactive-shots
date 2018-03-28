import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent {
  @Input() id: number;
  @Input() selected: boolean;
  @Input() link: string;
  @Input() tooltipText: string;
  @Input() tooltipPosition: TooltipPosition;

  @Output() select = new EventEmitter();
}
