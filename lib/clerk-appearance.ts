import { dark } from "@clerk/ui/themes"

export const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--bg-surface)",
    colorForeground: "var(--text-primary)",
    colorMutedForeground: "var(--text-muted)",
    colorPrimary: "var(--accent-primary)",
    colorPrimaryForeground: "var(--bg-base)",
    colorInput: "var(--bg-elevated)",
    colorInputForeground: "var(--text-primary)",
    colorNeutral: "var(--text-primary)",
    colorBorder: "var(--border-default)",
    colorDanger: "var(--state-error)",
    colorSuccess: "var(--state-success)",
    colorWarning: "var(--state-warning)",
    colorModalBackdrop: "var(--bg-base)",
    fontFamily: "var(--font-geist-sans)",
    borderRadius: "var(--radius)",
  },
}
