import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EventsService } from '../../../services/events.service';
import { Observable } from 'rxjs';
import { MosqueEvent } from '../../../services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  events$: Observable<MosqueEvent[]>;

  constructor(private eventsService: EventsService) {
    this.events$ = this.eventsService.getUpcomingEvents();
  }
}
