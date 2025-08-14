import Link from "next/link";

import { formatDateTime } from "@/lib/utils";
import { type Ticket } from "@/lib/types";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


/** Maps status to a badge variant/label */
function StatusBadge({ status }: { status: Ticket["status"] }) {
  const label =
    status === "open" ? "Open" : status === "in_progress" ? "In Progress" : "Closed";
  const variant = status === "closed" ? "secondary" : status === "open" ? "default" : "outline";
  return <Badge variant={variant}>{label}</Badge>;
}

/**
 * Renders a table of tickets. Title links to details page.
 */
export function TicketList({ tickets }: { tickets: Ticket[] }) {
  return (
      <Card className="border-0 shadow-none">
        <CardHeader>
          <CardTitle>Tickets List</CardTitle>
          <CardDescription>
            View and manage all support requests in one place. Track their status, authors, and creation dates, and quickly navigate to detailed views for updates and resolution.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] hidden md:table-cell">TK-ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Author</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell className="font-mono text-xs hidden md:table-cell">#{t.id}</TableCell>
                    <TableCell>
                      <Link href={`/tickets/details/${t.id}`} className="font-medium hover:underline">
                        {t.title}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <StatusBadge status={t.status} />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{t.author}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDateTime(t.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
  );
}

