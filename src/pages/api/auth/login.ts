// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { createToken } from '../auth/auth'
import cookie from 'cookie'
import { authenticateEquipe } from '../auth/authenticateEquipe'
import Equipe from '@/app/types/types'

async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  const { equipeName, password } = req.body

  try {
    const equipe: Equipe = await authenticateEquipe(equipeName, password)
    console.log('equipe', equipe)
    const token = createToken(equipe.Id)

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/',
      }),
    )

    res.status(200).json({ equipeName: equipe.Nom })
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: 'Invalid username or password' })
  }
}

export default loginHandler
