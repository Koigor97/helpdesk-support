import { notFound } from "next/navigation";
import { sbAdminClient } from "@/lib/supabase-clients/adminClient";
import RegisterForm from "@/components/auth/registerForm";

type RegisterPageProps = {
    params: Promise<{ tenant: string }>;
};

export default async function RegisterPage({ params }: RegisterPageProps) {
    const { tenant } = await params;

    const admin = sbAdminClient();
    const { data, error } = await admin
        .from("tenants")
        .select("*")
        .eq("id", tenant)
        .single();

    if (error) notFound();

    return (
        <RegisterForm tenant={tenant} tenantName={data.name} />
    );
}