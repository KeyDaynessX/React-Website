import React from 'react'
import { Button } from "./Button";
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay muted loop/>
      <h1>Advanture Awaits</h1>
      <p>What are you waitin for?</p>
      <div className='hero-btns'>
         <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
         <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER<i className='fa fa-play-circle'/></Button>
      </div>
    </div>
  )
}

export default HeroSection
