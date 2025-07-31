
import StatsCards from "@/components/analytics/statsCards";
import BarChartCard from "@/components/analytics/barChartCard";
import PieChartCard from "@/components/analytics/pieChartCard";
import RecentActivitiesCard from "@/components/dashboard/recentActivitiesCard";
import TeamPerformanceCard from "@/components/dashboard/teamPerformanceCard";

export default function OverViewComp() {
    return (
        <div className="container mx-auto px-4 mt-8 space-y-6">
            <StatsCards />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <BarChartCard />
                <PieChartCard />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <RecentActivitiesCard />
                <TeamPerformanceCard />
            </div>

        </div>
    )
}