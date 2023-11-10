import NavBar from '../app/components/NavBar'

import Contenu1 from '../app/components/Contenu1'
import FooterHome from '../app/components/FooterHome'

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body className='bg-slate-500'>
        <main className='py-5'>
          <Contenu1 />
        </main>
        <FooterHome />
      </body>
    </>
  )
}
