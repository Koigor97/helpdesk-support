import LoginForm from "@/components/auth/loginForm"
import {sbAdminClient} from "@/lib/supabase-clients/adminClient";
import {notFound} from "next/navigation";



type LoginSearchParams = {
  searchParams: Promise<{magicLink?: "yes" | "no"}>
  params: Promise<{ tenant: string }>;
}

export default async function Login({searchParams, params} : LoginSearchParams) {
  const { magicLink } = await searchParams;
  const { tenant } = await params;
  const wantsMagicLink = magicLink === "no"

  const superbaseAdmin  = sbAdminClient()

  const { data, error} = await superbaseAdmin
      .from("tenants")
      .select("*")
      .eq("id", tenant)
      .single()

  if (error) notFound()

  const { name: tenantName } = data;

  return (
    <LoginForm wantsPasswordLogin={wantsMagicLink} tenant={tenant} tenantName={tenantName} />
  )
}
