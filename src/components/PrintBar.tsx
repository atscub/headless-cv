import GithubIcon from '../assets/github.svg?react'
import { Icon } from './Icon'

const Tooltip: React.FC<{ content: string, children: React.ReactNode }> = ({ content, children }) => (
  <div className="tooltip tooltip-bottom">
        <div className="tooltip-content bg-orange-100 text-gray-700 shadow-xl">
          {content}
        </div>
    {children}
  </div>
);

export function PrintBar() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="mx-auto flex max-w-[850px] items-center justify-end gap-4 pb-4 print:hidden">
      <Tooltip content="Like the template? Feel free to fork it on GitHub!">
        <a
          href="https://github.com/atscub/headless-cv"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost gap-2"
        >
          <GithubIcon className="h-4 w-4" aria-hidden="true" />
          Source
        </a>  
      </Tooltip>
      <Tooltip content="Generate a PDF version of this CV using your browser's print functionality">
      <button
        type="button"
        onClick={handlePrint}
        className="btn btn-primary text-white"
      >
        <Icon name="Printer" className="h-4 w-4" />
        Get as PDF
      </button>
    </Tooltip>
    </div>
  )
}
