

export const TENANT_MAP = {
    "dsti.gov.local": "dsti",
    "mocti.gov.local": "mocti",
    "vontech.io": "vontech",
} as const;

export type Hostname = keyof typeof TENANT_MAP;
export type TenantSlug = (typeof TENANT_MAP)[Hostname];