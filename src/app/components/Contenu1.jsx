import ButtonLogin from './ButtonLogin'
import ButtonSignin from './ButtonSignin'
const Contenu1 = () => {
  return (
    <div className='text-white flex items-center justify-center flex-col mt-7 bg-black py-5'>
      <div className='w-2/3 py-8'>
        <p className='text-black text-center p-4 bg-white m-3 rounded-md '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          commodi accusantium ratione enim, numquam veniam velit consequuntur.
          Reiciendis sequi deserunt officia tempore iusto veniam hic culpa
          ipsum! Iste, iure. Aliquam.
        </p>
      </div>
      <ul className='steps mb-28'>
        <li className='step step-primary '>créer votre compte</li>
        <li className='step step-primary'>Se Connecter</li>
        <li className='step step-primary'>choisir ton équipe </li>
        <li className='step step-primary'>commencez la partie</li>
      </ul>
      <div className='hero p-11'>
        <div className='hero-content text-center '>
          <div className='max-w-md '>
            <h1 className='text-5xl font-bold'>Hello there</h1>
            <p className='text-white py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className='flex justify-center items-center'>
              <ButtonLogin />
              <ButtonSignin />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contenu1
