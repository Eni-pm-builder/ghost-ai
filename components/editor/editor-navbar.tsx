"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import type { Ref } from "react"

import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  sidebarToggleRef: Ref<HTMLButtonElement>
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({
  sidebarToggleRef,
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header className="relative z-30 grid h-14 shrink-0 grid-cols-3 items-center border-b border-surface-border bg-base px-3">
      <div className="flex items-center justify-start gap-2">
        <Button
          ref={sidebarToggleRef}
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={isSidebarOpen}
        >
          <ToggleIcon />
        </Button>
      </div>
      <div className="flex items-center justify-center" />
      <div className="flex items-center justify-end gap-2" />
    </header>
  )
}
