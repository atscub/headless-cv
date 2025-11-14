import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string
  components?: Components
}

const defaultComponents: Components = {
  a: ({ node, ...props }) => <a className="text-teal-500 underline" {...props} />,
  li: ({ node, ...props }) => <li className="mb-1 list-disc ml-5" {...props} />,
  strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
  p: ({ node, ...props }) => <p className="mt-2 text-justify text-[10.5px] text-text-medium first:mt-0" {...props} />,
}

export function Markdown({ content, components = defaultComponents }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  )
}
