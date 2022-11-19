import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import One from './components/One/One'
import Two from './components/Two/Two'

function App() {
  return (
    <div className='bg-zinc-800 isolate '>
      <Header/>
      <One pos="sticky" zindex="-z-50" smbg="sm:bg-[url('https://framerusercontent.com/images/MOAwA6OBwoJEWG8LqY8kQvgN390.png')]" bg="bg-[url('https://framerusercontent.com/images/SN15Wn9SmEfipXV8pWNl2TVUz4.jpg')]" />
      <Two pos="sticky" zindex="-z-40" centertext="Build cutting edge products in various domains." belowtext="web3, machine learning, artificial intelligence and other promising domains like robotics, no-code and music coming soon." smbg="sm:bg-[url('https://framerusercontent.com/images/4kDdHqKeHscyCesLs1E3Vk5OwQ.jpg')]" bg="bg-[url('https://framerusercontent.com/images/4kDdHqKeHscyCesLs1E3Vk5OwQ.jpg')]" />
      <Two pos="sticky" zindex="-z-30" centertext="See how far you can get in just one weekend." belowtext="A weekend is all it takes to activate yourself. All projects are specifically designed to be finished over a weekend with your besties." smbg="sm:bg-[url('https://framerusercontent.com/images/CWPCsXSK4V8hKBNKQK8KXP6Qz0.jpg')]" bg="bg-[url('https://framerusercontent.com/images/CWPCsXSK4V8hKBNKQK8KXP6Qz0.jpg')]" />
      <Two pos="sticky" zindex="-z-20" centertext="Take it to the next level." belowtext="Join a select group of builders that are working on their dreams on nights & weekends. Learn from those that have done it. Build with those that don't give up." smbg="sm:bg-[url('https://framerusercontent.com/images/wZ3BOhsHPLCrVvJMqKeGtctmM.jpg')]" bg="bg-[url('https://framerusercontent.com/images/wZ3BOhsHPLCrVvJMqKeGtctmM.jpg')]" />
      <Two pos="sticky" zindex="-z-10" centertext="Build online. Build IRL." belowtext="Join 124,000+ builders around the world hacking on cool shit. Make friends. Set ambitious goals and climb your inner mountain. You got this!" smbg="sm:bg-[url('https://framerusercontent.com/images/LEdLa78m3gdJ63PXTmV0w5CTviU.jpg')]" bg="bg-[url('https://framerusercontent.com/images/LEdLa78m3gdJ63PXTmV0w5CTviU.jpg')]" />
      <Footer/>
    </div>
  )
}

export default App