import { useState } from 'react'
import { NavbarComp } from './components/NavbarComp.jsx'
import { Home } from './pages/home/index.jsx'

function App() {

  return (
    <div className="app">
      <NavbarComp/>
      <Home />
    </div>
  )
}

export default App
