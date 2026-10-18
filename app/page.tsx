import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Suspense } from "react"

async function AuthRedirect(): Promise<never> {
  const { isAuthenticated } = await auth()
  redirect(isAuthenticated ? "/editor" : "/sign-in")
}

export default function Home() {
  return (
    <Suspense>
      <AuthRedirect />
    </Suspense>
  )
}
