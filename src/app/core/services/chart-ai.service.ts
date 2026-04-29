import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { SupabaseService } from './supabase.service';

@Injectable({ providedIn: 'root' })
export class ChartAiService {
  constructor(private readonly supabase: SupabaseService) {}

  sendPrompt(message: string): Observable<string> {
    return from(this.supabase.client.functions.invoke('chart-of-accounts-ai', { body: { message } })).pipe(
      map(({ data, error }) => {
        if (error) {
          throw error;
        }
        if (typeof data === 'string') {
          return data;
        }
        if (data?.reply) {
          return data.reply as string;
        }
        if (data?.output) {
          return data.output as string;
        }
        return JSON.stringify(data ?? 'No response from AI');
      })
    );
  }
}
