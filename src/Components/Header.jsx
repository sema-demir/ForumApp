import { Link } from 'react-router-dom'
import ProfileInfo from './ProfileInfo'
const Header = () => {
  return (
    <header className='bg-gray-800 px-3 lg:px-6 border-gray-200'>
        <nav className='relative flex justify-between items-center'>
            <Link className='flex items-center gap-3' to={'/'}>
            <img className='mr-3 h-6 sm:h-9' src="/logo.svg"  />
            <span className='text-xl font-semibold'>Flow</span>
            </Link>
            <ProfileInfo  />
        </nav>
       
    </header>
  )
}

export default Header