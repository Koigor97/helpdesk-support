import {Button} from "@/components/ui/button";
import {RiGridLine, RiListView} from "@remixicon/react";


type Props = {
    viewMode: string;
    setViewMode: (viewMode: "list" | "grid") => void;
}

export default function HeaderAndFilters({viewMode, setViewMode}: Props) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
                <p className="text-muted-foreground">Manage and track support tickets</p>
            </div>

            <div className="flex items-center gap-2">
                <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-[.5rem]"
                >
                    <RiListView className="h-4 w-4" />
                </Button>
                <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-[.5rem] p-1"
                >
                    <RiGridLine className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}