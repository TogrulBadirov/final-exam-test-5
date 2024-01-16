import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../layout/Header'
import Platform from '../../components/Platform'
import Features from '../../components/Features'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div><Toaster/></div>
      <Header/>
      <Platform/>
      <Features/>
    </>
  )
}

export default Home