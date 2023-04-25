import Link from 'next/link'

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link href="/login">Go to login</Link>
      <br />
      <Link href="/">Go to home</Link>
    </div>
  )
}
