'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const FormSignin = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const registerTeam = async event => {
    event.preventDefault()
    const response = await axios.post('/api/auth/register', {
      name,
      password,
    })

    if (response.data.message === 'Équipe enregistrée avec succès') {
      router.push('/login')
    } else {
      // TODO: Afficher un message d'erreur
    }
  }
  return (
    <form className='card-body' onSubmit={registerTeam}>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-black'>Nom</span>
        </label>
        <input
          type='text'
          placeholder="Nom d'équipe"
          className='input input-bordered  text-white bg-black'
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-black '>Password</span>
        </label>
        <input
          type='password'
          placeholder='password'
          className='input input-bordered text-white bg-black'
          required
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-black '>Password</span>
        </label>
        <input
          type='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder='confirm password'
          className='input input-bordered text-white bg-black'
          required
        />
      </div>
      <div className='form-control mt-6'>
        <button className='btn text-white bg-black'>SIGNIN</button>
      </div>
    </form>
  )
}

export default FormSignin
