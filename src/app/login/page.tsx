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
          <p className='py-6 text-center'>
            Dont have an account
            <Link href='/signin' className='link link-hover'>
              Sign up here
            </Link>
          </p>
        </div>

        <div className='card shrink-0 w-full h-full max-w-2xl shadow-2xl bg-white '>
          <FormLogin />
        </div>
      </div>
    </div>
  )
}

export default Login
