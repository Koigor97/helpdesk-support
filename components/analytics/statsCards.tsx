
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card";

import {
    RiCoupon2Line,
    RiAlertLine,
    RiCheckDoubleLine,
    RiTimeLine,
} from "@remixicon/react";

import {mockStats} from "@/utils/dummyData/overviewPage";

export default function StatsCards() {
    return (

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="py-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="paragraph-semibold">Total Tickets</CardTitle>
                    <RiCoupon2Line className="h-6 w-6 text-chart-1" />
                </CardHeader>
                <CardContent>
                    <div className="h2-bold">{mockStats.totalTickets.toLocaleString()}</div>
                    <p className="small-semibold text-chart-1">All time</p>
                </CardContent>
            </Card>

            <Card className="py-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="paragraph-semibold">Open Tickets</CardTitle>
                    <RiAlertLine className="h-6 w-6 text-chart-2" />
                </CardHeader>
                <CardContent>
                    <div className="h2-bold">{mockStats.openTickets}</div>
                    <p className="small-semibold text-chart-2">Needs attention</p>
                </CardContent>
            </Card>

            <Card className="py-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="paragraph-semibold">Resolved Today</CardTitle>
                    <RiCheckDoubleLine className="h-6 w-6 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="h2-bold">{mockStats.resolvedToday}</div>
                    <p className="small-semibold text-green-500">+12% from yesterday</p>
                </CardContent>
            </Card>

            <Card className="py-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="paragraph-semibold">Avg Response Time</CardTitle>
                    <RiTimeLine className="h-6 w-6 text-chart-3" />
                </CardHeader>
                <CardContent>
                    <div className="h2-bold">{mockStats.avgResponseTime}</div>
                    <p className="small-semibold text-chart-3">-0.3h from last week</p>
                </CardContent>
            </Card>
        </div>
    )
}



