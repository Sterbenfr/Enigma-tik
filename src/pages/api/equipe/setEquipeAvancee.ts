import { NextApiRequest, NextApiResponse } from 'next'
import { getDB } from '../getDB'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'PUT') {
    const { equipeId, equipeAvancee } = req.body
    // Get the team from the database
    const db = getDB()
    try {
      await db.query('UPDATE Equipe SET Avancee = ? WHERE Id = ?', [
        equipeAvancee,
        equipeId,
      ])
      res.status(200).json({ message: 'Update successful' })
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: 'Database error', error: error.message })
      } else {
        res.status(500).json({ message: 'An unknown error occurred' })
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
