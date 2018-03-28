import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';

export interface NavigationItem {
  selected: boolean,
  link: string,
  tooltipText: string,
  tooltipPosition: TooltipPosition
};

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navigationItems: NavigationItem[];

  constructor() {}
  ngOnInit() {}

  selectItem(evt) {
    const selectedItemIndex = evt.index;

    this.navigationItems.forEach((navigationItem, navigationItemIndex) => {
      if (navigationItemIndex === selectedItemIndex) {
        navigationItem.selected = true;
      } else {
        navigationItem.selected = false;
      }
    });
  }
}
