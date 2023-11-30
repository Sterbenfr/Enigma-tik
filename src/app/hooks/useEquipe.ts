import { useEffect, useState } from 'react'
import axios from 'axios'
import { Equipe } from '@/app/types/types'

export const useEquipe = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [equipe, setEquipe] = useState<Equipe[] | null>(null)

  useEffect(() => {
    axios
      .get('/api/auth/verify')
      .then(response => {
        setEquipe(response.data)
        setIsLoading(false)
      })
      .catch(() => (window.location.href = '/login'))
  }, [])
  return { equipe, isLoading }
}
