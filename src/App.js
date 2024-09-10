import React from 'react'
import Header from './Components/Header'
import { Helmet } from 'react-helmet';
import HomeContent from './Components/HomeContent';
import Experience from "./Components/Experience";
import About from './Components/About';
import InfinityScroll from './Components/InfinityScroll';
import Projects from './Components/Projects';
import Footer from "./Components/Footer";
import HorizontalLine from "./Components/HorizontalLine"
import Education from './Components/Education';
import profile from '../src/Images/myimage.jpeg'

function App() {

  return (
    <div className=" w-[100%] h-screen overflow-y-scroll bg-gray-900" >
      <Helmet>
        <link rel="icon" type="image/png" href={profile} className=' rounded-full' />
        <title>I'M - BARATH</title>
      </Helmet>

      {/* --------- THE BODY CONTENT --------- */}

      <Header />
      <HomeContent />
      <HorizontalLine />
      <About />
      <Education />
      <InfinityScroll />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App