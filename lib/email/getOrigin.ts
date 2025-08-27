import { headers } from "next/headers";

export async function getOrigin(): Promise<string> {
    const header = await headers();
    const host = header.get("host") ?? "localhost:3000";
    const proto = header.get("x-forwarded-proto") ?? "http";
    return `${proto}://${host}`;
}