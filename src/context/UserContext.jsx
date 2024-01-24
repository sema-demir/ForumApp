import axios from 'axios'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'http://localhost:3090'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  //oturumu acık olan kullanıcımınım bilgileri burada tutulur
  const [activeUser, setActiveUser] = useState()

  const navigate = useNavigate()

  //hesap olusturma
  const signup = user => {
    axios.post('/users', user).then(() => {
      //kullanıcının id sini locale kaydet
      localStorage.setItem('TOKEN', user.id)
      //aktif kullanıcının stateni güncelle

      setActiveUser(user)

      //ansayfaya yönlendir
      navigate('/')

      //bidirm gönder
      toast.success('Hesabınız Başarıyla Oluşturuldu')
    })
  }
  //hesaba griş yapma
  const login = (user) =>{
    
  }


  return (
    <UserContext.Provider value={{ activeUser, signup, login }}>
        {children}
        </UserContext.Provider>
  )
}
