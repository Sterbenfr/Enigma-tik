import { useEquipe } from '@/app/hooks/useEquipe'

const ProtectedPage: React.FC = () => {
  const { equipe, isLoading } = useEquipe()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Protected Page</h2>
      {equipe && equipe.length > 0 && (
        <div>
          <p>Nom de l&apos;équipe: {equipe[0].Nom}</p>
          <p>Points: {equipe[0].Points}</p>
        </div>
      )}
      {/* Page content */}
    </div>
  )
}

export default ProtectedPage
