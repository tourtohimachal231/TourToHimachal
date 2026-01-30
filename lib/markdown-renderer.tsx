"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const components: any = {
    h2: ({ children }) => (
      <h2 className="text-foreground mt-12 mb-6 scroll-mt-24 font-serif text-2xl font-bold md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-foreground mt-8 mb-4 font-serif text-xl font-semibold md:text-2xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground mb-6 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="text-muted-foreground mb-6 list-inside list-disc space-y-2">{children as any}</ul>
    ),
    ol: ({ children }) => (
      <ol className="text-muted-foreground mb-6 list-inside list-decimal space-y-2">{children as any}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children as any}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-saffron bg-muted/50 text-foreground my-8 rounded-r-lg border-l-4 py-2 pl-6 italic">
        {children as any}
      </blockquote>
    ),
    strong: ({ children }) => <strong className="font-semibold text-orange-500">{children as any}</strong>,
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-mountain-blue hover:text-mountain-blue/80 underline underline-offset-4"
      >
        {children as any}
      </a>
    ),
    img: ({ src, alt }) => (
      <figure className="my-8">
        <img src={src as string} alt={alt || ""} className="w-full rounded-lg" />
        {alt && (
          <figcaption className="text-muted-foreground mt-3 text-center text-sm italic">
            {alt}
          </figcaption>
        )}
      </figure>
    ),
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto">
        <table className="border-border w-full border-collapse rounded-lg border">{children as any}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-border bg-muted text-foreground border px-4 py-2 text-left font-semibold">
        {children as any}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-border text-muted-foreground border px-4 py-2">{children as any}</td>
    ),
    code: ({ children }) => (
      <code className="bg-muted text-foreground rounded px-2 py-1 font-mono text-sm">{children as any}</code>
    ),
    hr: () => <hr className="border-border my-12" />,
  }

  return (
    <div className={cn("prose prose-lg max-w-none", className)}>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
