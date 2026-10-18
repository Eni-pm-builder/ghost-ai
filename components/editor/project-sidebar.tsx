"use client"

import { FolderOpen, Plus, Users, X } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose?: () => void
  onNewProject?: () => void
}

interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
}

function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
      <div className="text-copy-faint [&_svg]:size-8">{icon}</div>
      <p className="text-sm font-medium text-copy-secondary">{title}</p>
      <p className="text-xs text-copy-muted">{description}</p>
    </div>
  )
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "absolute inset-y-0 left-0 z-20 flex w-72 flex-col border-r border-surface-border bg-surface shadow-2xl transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-surface-border pr-2 pl-4">
        <h2 className="text-sm font-medium text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X />
        </Button>
      </div>

      <Tabs defaultValue="mine" className="min-h-0 flex-1 gap-0 p-3">
        <TabsList className="w-full">
          <TabsTrigger value="mine">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="mine" className="min-h-0">
          <EmptyState
            icon={<FolderOpen />}
            title="No projects yet"
            description="Create a project to get started."
          />
        </TabsContent>
        <TabsContent value="shared" className="min-h-0">
          <EmptyState
            icon={<Users />}
            title="Nothing shared with you"
            description="Projects others share with you appear here."
          />
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-surface-border p-3">
        <Button className="w-full" onClick={onNewProject}>
          <Plus />
          New Project
        </Button>
      </div>
    </aside>
  )
}
