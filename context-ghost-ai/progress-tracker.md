# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Editor chrome: navbar, project sidebar shell, dialog pattern

## Current Goal

- Feature spec 02 (editor chrome) is implemented; next is the following feature spec.

## Completed

- 01 Design System: shadcn/ui (base-nova, Base UI) with Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea; `lucide-react`; `lib/utils.ts` re-exports `cn` from shadcn's `cn` package; dark-only tokens in `globals.css` mapped to the shadcn variables. `tsc`, `eslint` and `next build` pass; not yet checked visually in a browser.
- 02 Editor chrome: `components/editor/editor-navbar.tsx` (fixed 56px, left/center/right, sidebar toggle with `PanelLeftOpen`/`PanelLeftClose`, empty right), `project-sidebar.tsx` (floating overlay, slides in from left, `isOpen` prop, Projects header + close, My Projects / Shared tabs with empty states, full-width New Project button), `editor-dialog.tsx` (reusable title/description/body/footer dialog shell using tokens; no actual dialogs yet), `editor-shell.tsx` (client state wiring) mounted from `app/page.tsx`. `tsc` and `eslint` pass; not yet checked visually.

## In Progress

- None yet.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Add decisions that affect the system design or data model.

## Session Notes

- `globals.css` had been stripped to the Tailwind import before this feature, so the dark tokens from `ui-context.md` were added fresh.
- `app/page.tsx` contained the 02-editor spec text (invalid TSX), so it was replaced with the editor shell.
- `layout.tsx` metadata still says "Create Next App".
- 03-auth: Clerk wired per spec — `ClerkProvider` with `dark` theme and CSS-variable overrides (`lib/clerk-appearance.ts`), two-panel sign-in/sign-up (`components/auth/auth-shell.tsx`), protect-by-default `proxy.ts`, `/` redirects to `/editor` or `/sign-in`, editor moved to `/editor` with `UserButton` in the navbar. Metadata title updated to "Ghost AI".
- Clerk agent skills live in `.agents/skills` (symlinked into `.claude/skills`); excluded from `tsconfig.json` and ESLint so their templates don't break `npm run build`.
