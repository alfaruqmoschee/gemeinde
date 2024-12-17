import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../shared/ui/material.module';

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  toggleSidebar() {
    // const el = document;
    // const devent = document.createEvent('HTMLEvents');
    // devent.initEvent('resize', true, false);
    // el.dispatchEvent(devent);
  }
}
