import Image from 'next/image'
import ButtonLogin from './ButtonLogin'
import ButtonSignin from './ButtonSignin'
import logonavbar from '../../../public/image/LogoBDELight.png'

const NavBar = () => {
  return (
    <nav className='top-0 w-full border-gray-200 bg-black'>
      <div className='container flex items-center justify-between mx-auto p-2'>
        <a href='' className='flex items-center'>
          <Image
            src={logonavbar}
            alt="Description de l'image"
            width={35}
            height={35}
            className=' border-white rounded-sm shadow-2xl'
          />
        </a>
        <div className='flex items-center'>
          <ButtonLogin />
          <ButtonSignin />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
