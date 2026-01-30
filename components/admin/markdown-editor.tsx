"use client"

import { useState } from "react"
import { Eye, EyeOff, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

// Simple markdown preview without external dependencies
function MarkdownPreview({ content }: { content: string }) {
  const formatMarkdown = (text: string) => {
    return text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
      // Bold and Italic
      .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">$1</a>')
      // Lists
      .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
      // Line breaks and paragraphs
      .replace(/\n\n/g, '</p><p class="mb-3">')
      .replace(/\n/g, '<br />')
  }

  const formattedContent = formatMarkdown(content)

  return (
    <div className="prose prose-sm max-w-none">
      <p className="mb-3">{formattedContent}</p>
    </div>
  )
}

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  rows?: number
  className?: string
  id?: string
  required?: boolean
  compact?: boolean // Hide preview for compact mode (for single-line inputs)
}

export function MarkdownEditor({
  value,
  onChange,
  label,
  placeholder = "Write markdown content here...",
  rows = 5,
  className,
  id,
  required,
  compact = false,
}: MarkdownEditorProps) {
  const [showPreview, setShowPreview] = useState(!compact)

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className={cn("flex items-center justify-between", !compact && "gap-2")}>
          <Label htmlFor={id} className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            {label}
            {required && <span className="text-destructive">*</span>}
          </Label>
          {!compact && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
              className="h-7 text-xs"
            >
              {showPreview ? (
                <>
                  <EyeOff className="mr-1 h-3 w-3" />
                  Hide Preview
                </>
              ) : (
                <>
                  <Eye className="mr-1 h-3 w-3" />
                  Show Preview
                </>
              )}
            </Button>
          )}
        </div>
      )}
      <div className={cn("grid gap-2", !compact && showPreview && "md:grid-cols-2")}>
        <Textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={cn(
            "font-mono text-sm",
            !compact && showPreview && "md:h-[400px] md:resize-none"
          )}
          required={required}
        />
        {!compact && showPreview && (
          <div className="border-border bg-muted/30 rounded-md border p-4 overflow-y-auto md:h-[400px]">
            {value ? (
              <MarkdownPreview content={value} />
            ) : (
              <p className="text-muted-foreground text-sm italic">
                Preview will appear here...
              </p>
            )}
          </div>
        )}
      </div>
      {!compact && (
        <p className="text-muted-foreground text-xs">
          Markdown supported: **bold**, *italic*, # headings, - lists, [links](url), and more.
        </p>
      )}
    </div>
  )
}
