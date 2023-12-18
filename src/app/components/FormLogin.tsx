'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const FormLogin = () => {
  const [equipeName, setEquipeName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const HandleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Send a request to the server to authenticate the user
    event.preventDefault()
    axios
      .post('/api/auth/login', { equipeName, password })
      .then(response => {
        if (response.status === 200) {
          // Handle successful login
          console.log('Login successful for equipe:', response.data.equipeName)
          router.push('/')
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          // Handle invalid username or password
          console.error('Invalid username or password')
        } else {
          // Handle other errors
          console.error(error)
        }
      })
  }

  return (
    <form className='card-body'>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-black'>Username</span>
        </label>
        <input
          type='text'
          placeholder='username'
          className='input input-bordered  text-white bg-black'
          value={equipeName}
          onChange={e => setEquipeName(e.target.value)}
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
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='form-control mt-6'>
        <button className='btn text-white bg-black' onClick={HandleLogin}>
          Login
        </button>
      </div>
    </form>
  )
}

export default FormLogin
