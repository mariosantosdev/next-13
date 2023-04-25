interface ReposProps {
  owner: string
}

export async function Repos({ owner }: ReposProps) {
  const response = await fetch(`https://api.github.com/users/${owner}/repos`)
  const data = await response.json()

  return (
    <div>
      <h2>Repos</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
