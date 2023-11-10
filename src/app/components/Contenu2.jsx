import Image from 'next/image'
import imageContenu1 from '../../../public/image/cc.jpeg'

const Contenu2 = () => {
  return (
    <section className='hero'>
      <div className='hero-content flex-col md:flex-row'>
        <Image
          src={imageContenu1}
          alt="Description de l'image"
          className='w-full md:w-1/2'
        />
        <div className='w-full md:w-1/2'>
          <h1 className='text-5xl font-bold'>Box Office News!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Contenu2
