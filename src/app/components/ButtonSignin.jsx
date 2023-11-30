import Link from 'next/link'
const ButtonSignin = () => {
  return (
    <div>
      <Link href='/signin'>
        <button
          type='button'
          className='text-white bg-lime-800 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extralight rounded-lg text-sm px-1 py-1 text-center mr-1 md:mr-1 dark:bg-lime-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Créer Un Compte
        </button>
      </Link>
    </div>
  )
}
export default ButtonSignin
