import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import {LoginForm} from './pages/login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { DashboardLayout } from './pages/DashboardLayout.jsx'
import { ProtectedRoute } from './component/ProtectedRoute.jsx'
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace/>}/> 
          <Route path="/login" element={<LoginForm/>}/> 
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}/>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
