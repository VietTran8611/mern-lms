import React from 'react'
import { UnAuthNav } from '../../components/Nav/UnAuthNav'
import { Hero } from '../../components/Hero/Hero'
import { Footer } from '../../components/Footer/Footer'

export const Home = () => {
  return (
    <div>
        <UnAuthNav />
        <Hero />
        <Footer />
    </div>
  )
}
