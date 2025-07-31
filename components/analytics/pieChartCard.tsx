"use client"

import {useState, useMemo} from "react"
import { Label, Pie, PieChart, Sector, Cell } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {mockPieData} from "@/utils/dummyData/overviewPage";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartConfig,
    ChartContainer,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export const description = "An interactive pie chart"

const chartConfig = {
   open: {
        label: "Open",
       color: "#91C5FFFF"
    },
    inProgress: {
        label: "In Progress",
        color: "#EE9D1AFF"
    },
    resolved: {
        label: "Resolved",
        color: "#B8F2FFFF"
    },
} satisfies ChartConfig


export default function PieChartCard() {

    const id = "pie-interactive"
    const [activeStatus, setActiveStatus] = useState(mockPieData[0].name)

    const activeIndex = useMemo(
        () => mockPieData.findIndex((item) => item.name === activeStatus),
        [activeStatus]
    )

    const status = useMemo(() => mockPieData.map((item) => item.name), [])


    return (
        <Card data-chart={id} className="flex flex-col col-span-3">
            <ChartStyle id={id} config={chartConfig} />
            <CardHeader className="flex-row items-start space-y-0 pb-0">
                <div className="grid gap-1">
                    <CardTitle>Ticket Status - Interactive</CardTitle>
                    <CardDescription>Current ticket distribution</CardDescription>
                </div>
                <Select value={activeStatus} onValueChange={setActiveStatus}>
                    <SelectTrigger
                        className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl">
                        {status.map((key, idx) => {
                            const config = chartConfig[key as keyof typeof chartConfig]
                            if (!config) {
                                return null
                            }

                            return (
                                <SelectItem
                                    key={key}
                                    value={key}
                                    className="rounded-lg [&_span]:flex"
                                >
                                    <div className="flex items-center gap-2 text-xs">
                    <span
                        className="flex h-3 w-3 shrink-0 rounded-sm"
                        style={{ backgroundColor: config.color}}
                    />
                                        {config?.label}
                                    </div>
                                </SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[450px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={mockPieData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={70}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({outerRadius = 50, ...props
                                          }: PieSectorDataItem) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                    <Sector
                                        {...props}
                                        outerRadius={outerRadius + 25}
                                        innerRadius={outerRadius + 12}
                                    />
                                </g>
                            )}
                        >
                            {mockPieData.map((entry, idx) => {
                                const cfg = chartConfig[entry.name as keyof typeof chartConfig]
                                return <Cell key={idx} fill={cfg.color} />
                            })}

                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {mockPieData[activeIndex].value.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Tickets
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}