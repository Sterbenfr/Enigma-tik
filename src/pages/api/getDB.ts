import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

let pool: mysql.Pool | null = null

export const getDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    })
  }

  return pool
}
