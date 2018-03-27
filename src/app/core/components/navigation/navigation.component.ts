import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationItems: any = [
    { isActive: true, routerLink: '2do/register', tooltipText: 'Register', tooltipPosition: 'above' },
    { isActive: false, routerLink: '2do/login', tooltipText: 'Login', tooltipPosition: 'above' },
    { isActive: false, routerLink: '2do/reset-password', tooltipText: 'Reset password', tooltipPosition: 'above' },
    { isActive: false, routerLink: '2do/terms-of-service', tooltipText: 'Terms of service', tooltipPosition: 'above' },
    { isActive: false, routerLink: '2do/dashboard', tooltipText: 'Dashboard', tooltipPosition: 'above' },
    { isActive: false, routerLink: '2do/features', tooltipText: 'Features', tooltipPosition: 'above' }
  ];

  constructor() {}

  ngOnInit() {}

  onNavigationItemClick(index) {
    this.navigationItems.forEach((navigationItem, navigationItemIndex) => {
      if (navigationItemIndex === index) {
        navigationItem.isActive = true;
      } else {
        navigationItem.isActive = false;
      }
    });
  }
}
