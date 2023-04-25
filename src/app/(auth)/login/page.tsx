import Link from 'next/link'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/register">Go to register</Link>
      <br />
      <Link href="/">Go to home</Link>
    </div>
  )
}
