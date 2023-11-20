import mysql from 'mysql2/promise'
import bcrypt from 'bcrypt'
import { Equipe } from '../../../app/types/types'
import { getDB } from '../getDB'

export async function authenticateEquipe(
  name: string,
  password: string,
): Promise<Equipe> {
  const db = getDB()
  const [resultSet] = await db.query('SELECT * FROM Equipe WHERE Nom = ?', [
    name,
  ])
  const rows = resultSet as mysql.RowDataPacket[]

  if (rows.length === 0) {
    throw new Error('Invalid name or password')
  }

  const equipe = rows[0] as Equipe
  let passwordMatch = false
  try {
    passwordMatch = await bcrypt.compare(password, equipe.Password)
  } catch (error) {
    console.error('Error while comparing passwords:', error)
  }
  if (!passwordMatch) {
    throw new Error('Invalid name or password')
  }

  return {
    Id: equipe.Id,
    Nom: equipe.Nom,
    Password: equipe.Password,
    Points: equipe.Points,
    Avancee: equipe.Avancee,
  }
}
