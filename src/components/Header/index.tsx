import { ReactNode } from "react"

interface HeaderProps {
    children: ReactNode
}

export function Header({children}: HeaderProps) {
  return (
    <header className="bg-dark-20 border-2 border-dark-40 rounded-md">
      <div className="py-24 px-8 m-auto max-w-7xl flex flex-col justify-center items-center gap-16">
        {children}
      </div>
    </header>
  )
}

