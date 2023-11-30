import * as jwt from 'jsonwebtoken'
import * as cookie from 'cookie'

interface TokenPayload {
  userId: string
  iat: number
  exp: number
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET')
}

export const createToken = (userId: string): string => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' })
  return token
}

export const verifyToken = (req: {
  headers: { cookie?: string }
}): TokenPayload => {
  const cookies = cookie.parse(req.headers.cookie || '')
  const token = cookies.token

  if (!token) {
    throw new Error('Token not found in cookies')
  }

  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload
  } catch (error) {
    console.error('Error verifying token:', error)
    throw new Error('Invalid token')
  }
}
