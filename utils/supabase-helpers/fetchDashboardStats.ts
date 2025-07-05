"use server"

import {connection} from "next/server";
import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";

export async function fetchDashboardData() {
    await connection();

    try {
        /**
         *  implement supabase logic
         *  DO SOMETHING WITH SUPABASE
         * */

        // Mock data for demonstration
        const dashboardData = {
                totalTickets: 150,
                openTickets: 30,
                resolvedTickets: 120,
                activeUsers: 25,
                ticketsByStatus: [
                    { status: "open", count: 30 },
                    { status: "in_progress", count: 45 },
                    { status: "resolved", count: 75 },
                ],
                ticketsByPriority: [
                    { priority: "high", count: 40 },
                    { priority: "medium", count: 60 },
                    { priority: "low", count: 50 },
                ],
                recentTickets: [
                    {
                        id: "1",
                        title: "Ticket 1",
                        author: { name: "User 1", avatar: "/placeholder.svg" },
                        priority: { name: "high", color: "red" },
                        createdAt: "2024-01-01",
                    },
                    {
                        id: "2",
                        title: "Ticket 2",
                        author: { name: "User 2", avatar: "/placeholder.svg" },
                        priority: { name: "medium", color: "orange" },
                        createdAt: "2024-01-02",
                    },
                ],
                recentActivity: [
                    {
                        id: "1",
                        description: "Activity 1",
                        user: { name: "User 1" },
                        createdAt: "2024-01-01",
                        type: "ticket_created",
                    },
                    {
                        id: "2",
                        description: "Activity 2",
                        user: { name: "User 2" },
                        createdAt: "2024-01-02",
                        type: "comment_added",
                    },
                ],
                avgResponseTime: "2 hours",
            }

        return { data: dashboardData, error: null }
    } catch (error) {
        console.error("Error fetching dashboard data:", error)
        return { data: null, error: "Failed to fetch dashboard data" }
    }
}
