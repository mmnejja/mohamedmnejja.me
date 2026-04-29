import { Injectable } from '@angular/core';
import { from, map, Observable, switchMap } from 'rxjs';
import { CsrdReportSubmission } from '../../models/csrd-report.model';
import { SupabaseService } from './supabase.service';

@Injectable({ providedIn: 'root' })
export class CsrdReportService {
  constructor(private readonly supabase: SupabaseService) {}

  submitReport(name: string, email: string, file: File): Observable<void> {
    const storagePath = `${Date.now()}-${file.name}`;

    return from(
      this.supabase.client.storage.from('csrd-reports').upload(storagePath, file, {
        upsert: false,
        contentType: 'text/html'
      })
    ).pipe(
      map(({ error }) => {
        if (error) {
          throw error;
        }
      }),
      switchMap(() =>
        from(
          this.supabase.client.from('csrd_reports').insert({
            name,
            email,
            fileName: file.name,
            storagePath
          } satisfies CsrdReportSubmission)
        )
      ),
      map(({ error }) => {
        if (error) {
          throw error;
        }
      })
    );
  }
}
