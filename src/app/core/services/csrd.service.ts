import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CsrdService {
  private api = 'https://n8n.mohamedmnejja.me/webhook/csrd-upload';

  async sendReport(formData: FormData): Promise<unknown> {
    const response = await fetch(this.api, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(errorBody || 'Failed to submit CSRD upload');
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return response.json();
    }

    return response.text();
  }
}
