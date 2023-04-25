import type { Metadata } from 'next'
import { Repos } from '~/components/Repos'

interface UserProps {
  params: {
    slug: string
  }
}

// Custom header
export async function generateMetadata({
  params,
}: UserProps): Promise<Metadata> {
  return { title: `Usuário - ${params.slug}` }
}

export default async function User({ params }: UserProps) {
  const response = await fetch(`https://api.github.com/users/${params.slug}`, {
    next: {
      revalidate: 60, // 60 seconds
    },
  })
  const data = await response.json()

  return (
    <div>
      <h1>Usuário: {params.slug}</h1>
      <p>Info from Github API</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* @ts-expect-error Async Server Component */}
      <Repos owner={params.slug} />
    </div>
  )
}
