import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from './auth'
import { getEquipeById } from '../equipe/getEquipeById'
import type { Equipe } from '@/app/types/types'

declare module 'next' {
  interface NextApiRequest {
    equipe?: Equipe
  }
}

interface TokenPayload {
  userId: string
  iat: number
  exp: number
}

export const withAuth = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const tokenPayload: TokenPayload = verifyToken(req)
      const equipe: Equipe = await getEquipeById(tokenPayload.userId)
      req.equipe = equipe
      return handler(req, res)
    } catch (error) {
      res.status(401).send({ error: 'Not authorized' })
    }
  }
}
