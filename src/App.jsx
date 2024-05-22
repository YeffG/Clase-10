import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './Components/Inicio.jsx'
import { Contacto } from './Components/Contacto.jsx'
import { AboutUs } from './Components/AboutUs.jsx'
import { Nav1 } from './Components/Nav1.jsx'


function App() {
  return (
    <>
    <header><Nav1/></header>
        <Routes>
        <Route path="/" element = {<Inicio/>} />
        <Route path="/contacto" element = {<Contacto/>} />
        <Route path="/about" element = {<AboutUs/>} />
      </Routes>
    </>
  )
}

export default App
