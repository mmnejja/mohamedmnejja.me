export interface ChatMessage {
  id?: string;
  role: 'user' | 'ai' | 'error';
  content: string;
  created_at?: string;
}
