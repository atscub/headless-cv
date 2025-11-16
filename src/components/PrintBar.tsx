import GithubIcon from '../assets/github.svg?react'

export function PrintBar() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="mx-auto flex max-w-[850px] items-center justify-end gap-4 pb-4 print:hidden">
      <a
        href="https://github.com/atscub/headless-cv"
        target="_blank"
        rel="noreferrer"
        className="btn btn-ghost gap-2"
      >
        <GithubIcon className="h-4 w-4" aria-hidden="true" />
        Source
      </a>
      <button
        type="button"
        onClick={handlePrint}
        className="btn btn-primary"
      >
        Print CV
      </button>
    </div>
  )
}
