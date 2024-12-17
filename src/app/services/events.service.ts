import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface MosqueEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'prayer' | 'class' | 'community' | 'other';
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsSubject = new BehaviorSubject<MosqueEvent[]>([]);
  events$ = this.eventsSubject.asObservable();

  constructor() {
    this.loadInitialEvents();
  }

  private loadInitialEvents(): void {
    const initialEvents: MosqueEvent[] = [
      {
        id: '1',
        title: 'Friday Sermon',
        description: 'Weekly Jumu\'ah prayer and sermon',
        date: new Date(),
        type: 'prayer'
      },
      {
        id: '2',
        title: 'Islamic Studies Class',
        description: 'Weekly Islamic studies for adults',
        date: new Date(),
        type: 'class'
      }
    ];
    this.eventsSubject.next(initialEvents);
  }

  getUpcomingEvents(): Observable<MosqueEvent[]> {
    return this.events$;
  }
}