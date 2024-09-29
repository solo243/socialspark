import React from 'react'

import Home from './page/Home'
import Navbar from './components/comp/Navbar'
import Services from './page/Services'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import About from './page/About'

const App = () => {
  return (
    // <LocomotiveScrollProvider options={{smooth: true}}>
    <div class="absolute font-sans inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      <Home />
      <Services />
      <About />
    </div>
    // </LocomotiveScrollProvider>

  )
}

export default App