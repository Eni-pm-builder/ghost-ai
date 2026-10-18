import { Ghost } from "lucide-react"
import type { ReactNode } from "react"

const FEATURES = [
  "Describe a system in plain English",
  "Collaborate on a shared real-time canvas",
  "Generate a technical spec from your design",
]

interface AuthShellProps {
  children: ReactNode
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="grid min-h-screen bg-base lg:grid-cols-2">
      <aside className="hidden flex-col justify-between border-r border-surface-border bg-surface p-10 lg:flex">
        <div className="flex items-center gap-2 text-copy-primary">
          <Ghost className="h-5 w-5 text-brand" />
          <span className="text-lg font-semibold">Ghost AI</span>
        </div>
        <div className="space-y-6">
          <p className="max-w-sm text-2xl font-semibold text-copy-primary">
            Design systems together, with AI.
          </p>
          <ul className="space-y-2 text-sm text-copy-muted">
            {FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div />
      </aside>
      <main className="flex items-center justify-center p-6">{children}</main>
    </div>
  )
}
