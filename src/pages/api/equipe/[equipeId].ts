import { NextApiRequest, NextApiResponse } from 'next'
import { getDB } from '../getDB'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { equipeId } = req.query

    // Get the team from the database
    const db = getDB()
    const [equipe] = await db.query('SELECT * FROM Equipe WHERE Id = ?', [
      equipeId,
    ])
    if (!equipe) {
      return res.status(404).json({ message: 'Equipe not found' })
    }

    // Send the team as the response
    res.status(200).json(equipe)
  } else {
    // Send an error response for other HTTP methods
    res.status(405).json({ message: 'Method not allowed' })
  }
}
