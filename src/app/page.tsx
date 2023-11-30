import NavBar from './components/NavBar'

import Contenu1 from './components/Contenu1'
import Contenu2 from './components/Contenu2'
import Contenu from './components/Contenu'

import FooterHome from './components/FooterHome'

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className='bg-white'>
        <main className='py-5'>
          <Contenu2 />
          <Contenu1 />
          <Contenu />
        </main>
        <FooterHome />
      </div>
    </>
  )
}
