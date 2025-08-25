import { mockTickets } from "@/lib/mockData";
import { TicketList } from "@/components/tickets/TicketList";

type TicketsProp = {
  params: Promise<{ tenant: string }>;
}

export default async function TicketListPage({ params}: TicketsProp) {
  const { tenant } = await params;

  return (
      <TicketList tickets={mockTickets} tenant={tenant}/>
  );
}
