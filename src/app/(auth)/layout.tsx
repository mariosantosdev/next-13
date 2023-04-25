import { ReactNode } from 'react'

interface LayoutAuthProps {
  children: ReactNode
}

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    <div>
      <h1>Auth layout</h1>
      {children}
    </div>
  )
}
