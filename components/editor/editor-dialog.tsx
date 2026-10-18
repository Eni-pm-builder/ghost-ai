"use client"

import type { ReactNode } from "react"
import { cn } from "cn"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface EditorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  /** Optional dialog body, rendered between the header and footer. */
  children?: ReactNode
  /** Footer actions, e.g. Cancel / Confirm buttons. */
  footer?: ReactNode
  className?: string
}

/**
 * Shared shell for every editor dialog: title, description, body and footer
 * actions, styled with the globals.css tokens.
 */
export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "gap-5 rounded-3xl border border-surface-border bg-elevated p-6 text-copy-primary ring-0",
          className
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-copy-primary">{title}</DialogTitle>
          {description ? (
            <DialogDescription className="text-copy-muted">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
        {footer ? (
          <DialogFooter className="-mx-6 -mb-6 rounded-b-3xl border-surface-border bg-surface p-4 px-6">
            {footer}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
