import LoginForm from "@/components/auth/loginForm"



type LoginSearchParams = {
  searchParams: Promise<{magicLink?: "yes" | "no"}>
  params: string | unknown
}

export default async function Login({searchParams, params} : LoginSearchParams) {
  const {magicLink} = await searchParams;
  const wantsMagicLink = magicLink === "no"


  return (
      // @ts-ignore
    <LoginForm wantsPasswordLogin={wantsMagicLink} tenant={params.tenant} />
  )
}
