import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/dashboard">Go to dashboard</Link>
      <br />
      <Link href="/login">Go to login</Link>
    </div>
  )
}
