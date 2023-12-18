import Link from 'next/link'
const ButtonSignin = () => {
  return (
    <div>
      <Link href='/signin'>
        <button
          type='button'
          className='text-white bg-indigo-600 font-extralight rounded-lg text-s px-1 py-1 text-center mr-1 md:mr-1'
        >
          Créer Un Compte
        </button>
      </Link>
    </div>
  )
}
export default ButtonSignin
