'use client'

import { useState } from 'react'
import Link from 'next/link'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username && password) {
      const userData = { username, password }
      localStorage.setItem('user', JSON.stringify(userData))
      console.log('User saved on local storage!')
    } else {
      console.log('Please, fill all fields!')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-4 rounded bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Usuário</label>
          <input
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <Link href="/pages/home">
          <button
            onClick={handleLogin}
            className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Entrar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Login
