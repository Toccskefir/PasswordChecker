import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PasswordChecker } from './PasswordChecker'

function App() {
  const [password, setPassword] = useState('');

  return <div>
    <header>
      <h1>Jelszó biztonság ellenőrzés</h1>
    </header>
    <main>
      <input type="password" onInput={e => {setPassword(e.currentTarget.value)}}/>
      <PasswordChecker passwordLength={password.length} password={password} />
    </main>
    <footer>
      <p>Tóth Kevin</p>
      <p>2024.01.15.</p>
    </footer>
  </div>
}

export default App
