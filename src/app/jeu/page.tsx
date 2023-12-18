import Image from 'next/image'
import logonavbar from '../../../public/image/LogoBDEDark.png'
import Link from 'next/link'
import FormLogin from '../components/FormLogin'

const Login = () => {
  return (
    <div className='hero min-h-screen bg-black'>
      <div className='hero-content flex-col '>
        <div className='lg:text-left'>
          <div className='flex flex-col items-center justify-cente'>
            <Image
              src={logonavbar}
              height={720}
              width={768}
              alt="Description de l'image"
              className='justify-center w-full md:w-1/2 p-2 rounded-2xl shadow-2xl '
            />
          </div>
          <h1 className='text-5xl font-bold text-center'>ENIGMATIK!</h1>
          <p className='py-6 text-center pt-16'>Are you Ready ??????</p>
          <div className='flex justify-center items-center pt-4'>
            <button className='btn btn-primary bg-black w-full  text-2xl'>
              <Link href='/partie' className='link link-hover'>
                Starting Game
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
