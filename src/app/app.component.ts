import { Component } from '@angular/core';
import { MaterialModule } from './shared/ui/material.module';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MaterialModule,
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'alfaruq-moschee-gemeinde';
}
