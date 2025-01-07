import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
    role: string
}

export function Container({children, role}: ContainerProps) {
  return (
    <main className="m-auto py-24 px-8 max-w-7xl grid grid-cols-12 gap-8" role={role}>
      {children}
    </main>
  )
}
