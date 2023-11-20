import Equipe from '../../../app/types/types'

export async function getEquipeById(equipeId: string): Promise<Equipe> {
  const response = await fetch(`http://localhost:3000/api/equipe/${equipeId}`)

  if (!response.ok) {
    throw new Error('Equipe not found')
  }

  const equipe: Equipe = await response.json()
  return equipe
}
