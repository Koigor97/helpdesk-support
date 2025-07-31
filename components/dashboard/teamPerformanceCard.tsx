
import {agents} from "@/utils/dummyData/overviewPage";
import {RiStarFill} from "@remixicon/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";




export default function TeamPerformanceCard() {
    return (
        <Card className="self-start">
            <CardHeader>
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>Agent statistics this week</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {agents.map((agent) => (
                        <div key={agent.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={`${agent.avatarSrc}`} />
                                    <AvatarFallback>{agent.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">{agent.name}</p>
                                    <p className="text-xs text-muted-foreground">{agent.role}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium">{agent.resolvedCount}</p>
                                <div className="flex items-center gap-1">
                                    <RiStarFill className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs">{agent.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}