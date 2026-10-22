"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

interface TabsContextValue {
  baseId: string
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function Tabs({
  className,
  id: propId,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const generatedId = React.useId()
  const baseId = propId || generatedId

  return (
    <TabsContext.Provider value={{ baseId }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn("flex flex-col gap-2", className)}
        id={propId}
        {...props}
      />
    </TabsContext.Provider>
  )
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  value,
  id,
  "aria-controls": ariaControls,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const tabsContext = React.useContext(TabsContext)
  const baseId = tabsContext?.baseId
  const triggerId = id ?? (baseId ? `${baseId}-trigger-${value}` : undefined)
  const contentId = ariaControls ?? (baseId ? `${baseId}-content-${value}` : undefined)

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      value={value}
      id={triggerId}
      aria-controls={contentId}
      {...props}
    />
  )
}

function TabsContent({
  className,
  value,
  id,
  "aria-labelledby": ariaLabelledby,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const tabsContext = React.useContext(TabsContext)
  const baseId = tabsContext?.baseId
  const contentId = id ?? (baseId ? `${baseId}-content-${value}` : undefined)
  const triggerId = ariaLabelledby ?? (baseId ? `${baseId}-trigger-${value}` : undefined)

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      value={value}
      id={contentId}
      aria-labelledby={triggerId}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
