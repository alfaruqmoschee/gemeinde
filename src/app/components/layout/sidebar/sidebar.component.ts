import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem, menuList, RouterMenuItem } from './menu-list';
import { MaterialModule } from '../../../shared/ui/material.module';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  sideMenu = menuList;
  // collapse = false;

  toggleSidebar() {
    if (this.sidenav) this.sidenav.toggle();
    // this.collapse = !this.collapse;
    // const el = document;
    // const devent = document.createEvent('HTMLEvents');
    // devent.initEvent('resize', true, false);
    // el.dispatchEvent(devent);
  }

  isRouterMenuItem(menuItem: MenuItem): menuItem is RouterMenuItem {
    return menuItem instanceof RouterMenuItem;
  }
}
