export async function generateLink(path: string, params: Record<string, string>) {
    const { getOrigin } = await import("./getOrigin");
    const origin = await getOrigin();
    const url = new URL(path, origin);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    return url.toString();
}