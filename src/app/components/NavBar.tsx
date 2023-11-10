import Image from 'next/image'
import logonavbar from '../../../public/image/logoENIGMA.png'

const NavBar = () => {
  return (
    <nav className='top-0 w-full border-gray-200 bg-white'>
      <div className='container flex items-center justify-between mx-auto p-2'>
        <a href='' className='flex items-center'>
          <Image src={logonavbar} alt="Description de l'image" width={100} />
        </a>

        <div className='flex items-center'>
          <button
            type='button'
            className='text-white bg-lime-800 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extralight rounded-lg text-sm px-1 py-1 text-center mr-1 md:mr-1 dark:bg-lime-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Se Connecter
          </button>
          <button
            type='button'
            className='text-white bg-lime-800 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extralight rounded-lg text-sm px-1 py-1 text-center mr-1 md:mr-1 dark:bg-lime-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Créer Un Compte
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
