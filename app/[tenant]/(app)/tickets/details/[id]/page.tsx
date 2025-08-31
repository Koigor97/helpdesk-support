import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TicketComments } from "@/components/tickets/TicketComments";
import { formatDateTime } from "@/lib/utils";
import { mockTickets, mockComments } from "@/lib/mockData";

interface PageProps { params: Promise<{ id: string }> }

export default async function TicketDetailsPage({ params }: PageProps) {
  const {id: theID} = await params
  const ticket = mockTickets.find((t) => t.id === theID);

  if (!ticket) return notFound();

  const comments = mockComments[ticket.id] ?? [];

  const statusLabel =
    ticket.status === "open" ? "Open" : ticket.status === "in_progress" ? "In Progress" : "Closed";

  return (
    <div className="space-y-4 px-5 lg:w-[70%]">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="font-mono text-base">#{ticket.id}</span>
            <Badge>{statusLabel}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-xs text-muted-foreground">
            Created by <strong className="text-foreground">{ticket.author}</strong> at {formatDateTime(ticket.createdAt)}
          </div>
          <h2 className="text-xl font-semibold">{ticket.title}</h2>
          <p className="leading-relaxed text-sm">{ticket.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <TicketComments initial={comments} />
        </CardContent>
      </Card>
    </div>
  );
}
