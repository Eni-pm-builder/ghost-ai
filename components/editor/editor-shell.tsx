"use client"

import { useRef, useState } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export function EditorShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const sidebarToggleRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="flex h-screen flex-col bg-base">
      <EditorNavbar
        sidebarToggleRef={sidebarToggleRef}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />
      <div className="relative flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => {
            sidebarToggleRef.current?.focus()
            setIsSidebarOpen(false)
          }}
        />
        <main className="h-full" />
      </div>
    </div>
  )
}
