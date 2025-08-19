import LoginForm from "@/components/auth/loginForm"


type LoginSearchParams = Promise<{magicLink?: "yes" | "no"}>

export default async function Login({searchParams} : {searchParams : LoginSearchParams}) {
  const {magicLink} = await searchParams;
  const wantsMagicLink = magicLink === "no"

  return (
    <LoginForm wantsPasswordLogin={wantsMagicLink}/>
  )
}
