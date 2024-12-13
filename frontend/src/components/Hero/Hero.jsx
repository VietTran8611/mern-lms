import React from 'react'
import image from './download.jpg';

export const Hero = () => {
  return (
    <div className='container hero-container'>
        <div className='hero-left'>
            <h1>Learning that gets you</h1>
            <p>Skills for your present and your future. Start learning with me</p>
        </div>
        <div className='hero-right'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}
