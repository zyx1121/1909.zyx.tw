import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  async function signIn() {
    "use server"
    const supabase = await createClient()
    const origin = (await headers()).get("origin")
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })
    if (data.url) {
      redirect(data.url)
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-lg font-medium">1909</h1>
        <form action={signIn}>
          <Button type="submit" variant="outline">
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  )
}
