import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/dashboard">Go to dashboard</Link>
    </div>
  )
}
