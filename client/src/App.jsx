import { firebaseConfig } from './.config/firebase-config'
import { initializeApp } from 'firebase/app'
import './App.css'
import Header from './components/header/Header'
import LoginForm from './components/auth/login/Login'
import { AuthProvider } from './components/auth/AuthProvider'


initializeApp(firebaseConfig)

const App = () => {

  return (
    <AuthProvider>
      <Header isLoggedin={false} />
      <LoginForm />
    </AuthProvider>
  )
}

export default App