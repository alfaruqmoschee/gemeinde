import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/ui/material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
@Component({
  standalone: true,
  imports: [MaterialModule, NgScrollbarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
