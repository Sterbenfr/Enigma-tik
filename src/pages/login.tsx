// pages/login.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const LoginPage: React.FC = () => {
  const [equipeName, setEquipeName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const HandleLogin = async () => {
    // Send a request to the server to authenticate the user
    axios
      .post('/api/auth/login', { equipeName, password })
      .then(() => router.push('/protectedPageExemple'))
      .catch(console.error)
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>
          Username:
          <input
            type='text'
            value={equipeName}
            onChange={e => setEquipeName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type='button' onClick={HandleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
