import Link from 'next/link'
const ButtonPartie = () => {
  return (
    <div>
      <Link href='/partie'>
        <button
          type='button'
          className='text-white bg-lime-800 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extralight rounded-lg text-sm px-1 py-1 text-center mr-1 md:mr-1 dark:bg-lime-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Lancer la game
        </button>
      </Link>
    </div>
  )
}
export default ButtonPartie