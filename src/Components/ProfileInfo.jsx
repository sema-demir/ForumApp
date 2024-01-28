import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
const ProfileInfo = () => {
  const { activeUser, logout } = useContext(UserContext)

  return (
    <div className='group relative flex items-center gap-4 cursor-pointer p-2 rounded-md transition hover:bg-gray-700'>
      <img className='w-10 h-10 rounded-full ' src={activeUser?.image} />
      <h2 className='font-bold'>{activeUser?.name}</h2>
      <div className='group-hover:flex hidden flex-col absolute top-14 bg-gray-600 rounded p-1 start-6'>
        <p className='rounded p-2'>{activeUser?.email}</p>

        <Link className='rounded p-2 w-full hover:bg-gray-400' to={'/profile'}>
          Profili Göster
        </Link>

        <p onClick={logout} 
        className='rounded p-2 w-full hover:bg-gray-400'>
          Çıkış Yap
        </p>
      </div>
    </div>
  )
}

export default ProfileInfo
