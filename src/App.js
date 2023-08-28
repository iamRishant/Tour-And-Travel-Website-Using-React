import React,{useEffect} from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Recommended from './components/Recommended'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import ScrollReveal from 'scrollreveal'

export default function App() {
  useEffect(()=>{
    const sr= ScrollReveal({
      origin:"top",
      distance:"80px",
      duration:2000,
      reset:true,
    });
    sr.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      #testimonials,
      footer
      `,{
        opacity:0,
        interval:300,
      }
    )
  },[])
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommended/>
      <Testimonial/>
      <Footer/>
    </>
  )
}
