import NavBar from './components/navbar';
import Container from './components/container'
import Content from './components/content'
import CallToAction from './components/calltoaction'
import Footer from './components/footer'



export default function Home() {
  return (
    <div>
      <header className='relative flex flex-col'>
        <div className='absolute inset-0 bg-diesel bg-no-repeat bg-cover bg-center brightness-50 z-1'> 
        </div>
        <NavBar />
        <Container />
      </header>


      <section className='max-h-screen'>
        <Content />
        
      </section>


      <section>
        <CallToAction />
      </section>

      
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
