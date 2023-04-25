import type { Metadata } from 'next'

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

export default function User({ params }: UserProps) {
  return (
    <div>
      <h1>Usuário: {params.slug}</h1>
    </div>
  )
}
