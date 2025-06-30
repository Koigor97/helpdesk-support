import LoginForm from "@/components/auth/LoginForm"


type LoginSearchParams = Promise<{magicLink?: "yes" | "no"}>

async function Login({searchParams} : {searchParams : LoginSearchParams}) {
  const {magicLink} = await searchParams;
  const wantsMagicLink = magicLink === "no"

  return (
    <LoginForm wantsPasswordLogin={wantsMagicLink}/>
  )
}

export default Login