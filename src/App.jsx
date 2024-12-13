import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Experiences from './Components/Experiences/Experiences'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

export default function App() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <Intro></Intro>
        <Services></Services>
        <Experiences></Experiences>
        <Works></Works>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
}