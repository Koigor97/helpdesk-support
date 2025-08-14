/**
 * Domain types for Tickets, Comments, Users.
 */
export type TicketStatus = "open" | "in_progress" | "closed";

export interface Ticket {
  id: string;
  title: string;
  status: TicketStatus;
  author: string;
  createdAt: string; // ISO timestamp
  description: string;
}

export interface Comment {
  author: string;
  date: string; // ISO date
  content: string;
}

export interface User {
  id: string;
  name: string;
  job: string;
  isAvailable: boolean;
}
