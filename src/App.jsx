import { useState } from 'react'
import {Intro, Navbar} from './components';

const App = () => {

  return (
    <div className="bg-sami-black min-h-screen">
        <div className="mx-32">
        <Navbar/>
            <Intro/>

        </div>
    </div>
  )
}

export default App
