import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const registerTeam = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const response = await axios.post('/api/auth/register', {
      name,
      password,
    })

    if (response.data.message === 'Équipe enregistrée avec succès') {
      window.location.href = '/login'
    } else {
      // Afficher un message d'erreur
    }
  }

  return (
    <form onSubmit={registerTeam}>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nom de l'équipe"
        required
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Mot de passe'
        required
      />
      <button type='submit'>Inscription</button>
    </form>
  )
}
