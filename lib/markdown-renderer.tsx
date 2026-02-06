"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
  className?: string
  textColor?: string
}

interface MarkdownComponents {
  h2: React.ComponentType<{ children?: React.ReactNode }>
  h3: React.ComponentType<{ children?: React.ReactNode }>
  p: React.ComponentType<{ children?: React.ReactNode }>
  ul: React.ComponentType<{ children?: React.ReactNode }>
  ol: React.ComponentType<{ children?: React.ReactNode }>
  li: React.ComponentType<{ children?: React.ReactNode }>
  blockquote: React.ComponentType<{ children?: React.ReactNode }>
  strong: React.ComponentType<{ children?: React.ReactNode }>
  a: React.ComponentType<{ href?: string; children?: React.ReactNode }>
  img: React.ComponentType<{ src?: string | Blob; alt?: string }>
  table: React.ComponentType<{ children?: React.ReactNode }>
  th: React.ComponentType<{ children?: React.ReactNode }>
  td: React.ComponentType<{ children?: React.ReactNode }>
  code: React.ComponentType<{ children?: React.ReactNode }>
  hr: React.ComponentType
}

export function MarkdownRenderer({ content, className, textColor = "text-muted-foreground" }: MarkdownRendererProps) {
  const components: MarkdownComponents = {
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
      <p className={`${textColor} mb-6 leading-relaxed`}>{children}</p>
    ),
    ul: ({ children }) => (
      <ul className={`${textColor} mb-6 list-inside list-disc space-y-2`}>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className={`${textColor} mb-6 list-inside list-decimal space-y-2`}>{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-saffron bg-muted/50 text-foreground my-8 rounded-r-lg border-l-4 py-2 pl-6 italic">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => <strong className="font-semibold text-orange-500">{children}</strong>,
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-saffron hover:text-saffron/80 underline underline-offset-4"
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <figure className="my-8">
        <img src={src} alt={alt || ""} className="w-full rounded-lg" />
        {alt && (
          <figcaption className="text-muted-foreground mt-3 text-center text-sm italic">
            {alt}
          </figcaption>
        )}
      </figure>
    ),
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto">
        <table className="border-border w-full border-collapse rounded-lg border">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-border bg-muted text-foreground border px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className={`border-border ${textColor} border px-4 py-2`}>{children}</td>
    ),
    code: ({ children }) => (
      <code className="bg-muted text-foreground rounded px-2 py-1 font-mono text-sm">{children}</code>
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
