import Image from 'next/image'
import logonavbar from '../../../public/image/lille.png'
import ButtonPartie from './ButtonPartie'

const Contenu2 = () => {
  return (
    <div className='hero py-8'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <Image
          src={logonavbar}
          alt="Description de l'image"
          className='max-w-3xl rounded-lg shadow-2xl md: w-full'
        />
        <div className='text-black'>
          <h1 className='text-5xl font-bold'>Box Office News!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonPartie />
          {/*<button className='btn btn-primary bg-black'>Get Started</button>*/}
        </div>
      </div>
    </div>
  )
}

export default Contenu2
