import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/Navigation/ContactHeader/ContactHeader'
import ContactForm from './components/Navigation/ContactForm/ContactForm'

function App() {

  return (
    <>
    <Navigation />
    <main className='main_container'>
    <ContactHeader />
    <ContactForm />
    </main>
    </>
  )
}

export default App
