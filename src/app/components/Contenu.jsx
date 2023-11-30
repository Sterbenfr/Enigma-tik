import Image from 'next/image'
import logonavbar from '../../../public/image/LogoBDEDark.png'

export default function Contenu() {
  return (
    <section className='hero py-8'>
      <div className='hero-content flex-col md:flex-row'>
        <Image
          src={logonavbar}
          height={512}
          width={768}
          alt="Description de l'image"
          className='w-full md:w-1/2 p-2 rounded-2xl shadow-2xl'
        />
        <div className='w-full md:w-1/2'>
          <h1 className='text-black text-3xl font-bold md:text-xs'>
            ENIGMATIK
          </h1>
          <h2 className='text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quasi ipsa iste a? Ad nobis earum non, nostrum corrupti sint iste
            modi, tenetur esse at odit, eligendi pariatur ea numquam?
          </h2>
          <div className='py-8'>
            <button className='btn btn-primary bg-black'>
              Plus dinformations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
