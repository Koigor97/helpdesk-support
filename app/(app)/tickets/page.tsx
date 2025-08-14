import { mockTickets } from "@/lib/mockData";
import { TicketList } from "@/components/tickets/TicketList";

export default function TicketListPage() {
  return (
      <TicketList tickets={mockTickets} />
  );
}
