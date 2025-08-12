import type {DockAction} from "@/utils/types";
import {RiAddFill, RiUserAddLine, RiSettings3Line} from "@remixicon/react";
import React from "react";

/**
 ** Returns a set of dock actions based on the user's role.
 ** Admins and Managers receive the same set of actions, including AddUserComp.
 ** Agents receive a limited subset of common actions only.
 * @param AddUserComp - A dynamically loaded React component (e.g. a Sheet) that wraps children for adding users.
 * @returns A role-keyed object containing an array of DockAction items.
 */
export function getDockActions(
    AddUserComp: React.ComponentType<{ children: React.ReactNode }>
): Record<"admin" | "manager" | "agent", DockAction[]> {

    //* Shared dock actions available to all roles
    const commonActions: DockAction[] = [
        {
            id: "create-ticket",
            label: "Create Ticket",
            icon: RiAddFill,
            route: "/dashboard/ticket/create",
        },
        {
            id: "settings",
            label: "Settings",
            icon: RiSettings3Line,
            route: "/dashboard/settings",
        },
    ];

    //* Admin and manager specific dock actions (extends common actions with Add User)
    const adminActions: DockAction[] = [
        ...commonActions,
        {
            id: "add-user",
            label: "Add User",
            icon: RiUserAddLine,
            component: AddUserComp,
        },
    ];

    //* Return role-based actions map
    return {
        admin: adminActions,
        manager: adminActions,
        agent: commonActions,
    };
}
