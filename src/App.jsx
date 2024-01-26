import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Register from './Pages/Register'
import MainPage from './Pages/MainPage'
import Layout from './Pages/Layout'

const App = () => {
  return (
    
      <Routes>
       
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
       <Route element={<Layout />}>
       <Route path='/' element={<MainPage />} />
        <Route path='/detay' element={<h1>Blog Detay Sayfası</h1>} />
        <Route path='/profil' element={<h1>Profil Sayfası</h1>} />
       </Route>
        
      </Routes>
    
  )
}

export default App
