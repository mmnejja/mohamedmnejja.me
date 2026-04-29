import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { ContactMessage } from '../../models/contact-message.model';
import { SupabaseService } from './supabase.service';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private readonly supabase: SupabaseService) {}

  sendMessage(payload: ContactMessage): Observable<void> {
    return from(this.supabase.client.from('contact_messages').insert(payload)).pipe(
      map(({ error }) => {
        if (error) {
          throw error;
        }
      })
    );
  }
}
