import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Container className='py-3'>
      <Outlet/>
      </Container>
      <Footer/>
    </div>
  )
}

export default RootLayout
