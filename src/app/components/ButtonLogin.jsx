import Link from 'next/link'

const ButtonLogin = () => {
  return (
    <div>
      <Link href='/login'>
        <button
          type='button'
          className='text-white bg-indigo-600 font-extralight rounded-lg text-s px-1 py-1 text-center mr-1 md:mr-1'
        >
          Se Connecter
        </button>
      </Link>
    </div>
  )
}
export default ButtonLogin
