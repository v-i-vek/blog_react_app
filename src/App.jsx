import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import {LoginForm} from './pages/login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { Dashbaord } from './pages/Dashbaord.jsx'
import { ProtectedRoute } from './component/ProtectedRoute.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace/>}/> 
          <Route path="/login" element={<LoginForm/>}/> 
          <Route path="/dashboard" element={<ProtectedRoute><Dashbaord/></ProtectedRoute>}/>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
