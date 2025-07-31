"use client";

import {mockChartData} from "@/utils/dummyData/overviewPage";

import {RiBarChartFill} from "@remixicon/react";
import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = " Analytics Bar Chart";

const chartConfig = {
    tickets: {
        label: "Tickets",
        color: "hsl(var(--chart-1))"
    },
    resolved: {
        label: "Resolved",
        color: "hsl(var(--chart-2))"
    },
} satisfies ChartConfig

export default function BarChartCard() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Ticket Volume</CardTitle>
                <CardDescription>Daily ticket creation and resolution</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={mockChartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" className="rounded" />}
                        />
                        <Bar dataKey="tickets" fill="var(--chart-1)" radius={50} />
                        <Bar dataKey="resolved" fill="var(--chart-2)" radius={50} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm pt-0">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <RiBarChartFill className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total ticket creation and resolution for the week
                </div>
            </CardFooter>
        </Card>
    )
}