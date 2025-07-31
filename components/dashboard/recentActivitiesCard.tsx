import Link from 'next/link'

import {mockRecentTickets} from "@/utils/dummyData/overviewPage";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import {formatDate} from "@/utils/helpers";
import {statusColors, priorityColors} from "@/utils/dummyData/overviewPage";


export default function RecentActivitiesCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Tickets</CardTitle>
                <CardDescription>Latest support requests</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {mockRecentTickets.map((ticket) => (
                        <div key={ticket.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">#{ticket.id}</span>
                                    <Badge className={priorityColors[ticket.priority as keyof typeof priorityColors]}>
                                        {ticket.priority}
                                    </Badge>
                                    <Badge className={statusColors[ticket.status as keyof typeof statusColors]}>
                                        {ticket.status.replace("_", " ")}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-1">{ticket.title}</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span>Customer: {ticket.customer}</span>
                                    <span>Assigned: {ticket.assignee}</span>
                                    <span>{formatDate(ticket.createdAt)}</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href={`/dashboard/tickets/${ticket.id}`}>
                                    View
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
