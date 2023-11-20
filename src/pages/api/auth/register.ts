import { NextApiRequest, NextApiResponse } from 'next'
import { Equipe } from '../../../app/types/types'
import { getDB } from '../getDB'
import bcrypt from 'bcrypt'

export function generateId() {
  return Math.random().toString(36).slice(2)
}

export default async function registerTeam(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    // Récupérer les données de la requête POST
    const { name, password } = req.body

    // Vérifier que les champs ne sont pas vides
    if (!name || !password) {
      return res.status(400).json({ message: 'Tous les champs sont requis' })
    }

    // Générer un id unique
    const id = generateId()
    const points = 0
    const Avancee = 0
    // Crypter le mot de passe
    const hashedPassword = await bcrypt.hash(password, 2)
    // Créer une nouvelle équipe avec les données reçues
    const newTeam: Equipe = {
      Id: id,
      Nom: name,
      Password: hashedPassword,
      Points: points,
      Avancee: Avancee,
    }
    // Enregistrer l'équipe dans la base de données
    const db = getDB()
    await db.query('INSERT INTO Equipe SET ?', newTeam)

    // Envoyer une réponse réussie
    res.status(200).json({ message: 'Équipe enregistrée avec succès' })
  } else {
    // Envoyer une réponse d'erreur pour les autres méthodes HTTP
    res.status(405).json({ message: 'Méthode non autorisée' })
  }
}
