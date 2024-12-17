import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [DatePipe],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentData: Date;
  environmentName: string;

  constructor() {
    this.currentData = new Date();
    this.environmentName = 'FIXME';
  }
}
