import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import customTheme from './CustomTheme'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import Apps from './components/Apps'
import Providers from './components/Providers'
import Testimonials from './components/Testimonials'
import Articles from './components/Articles'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <Header />
      <Services />
      <Providers />
      <Apps />
      <Testimonials />
      <Articles />
      <Footer />
    </ThemeProvider>
  )
}

export default App
