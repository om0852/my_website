import React from 'react'
import About from './About'
import Navbar from './Navbar'
import Project from './Project'
import Section from './Section'
import Skill from './Skill'

function Main() {
  return (
    <>
    <Navbar/>
    <div className='main'>
      <Section/>
      <About/>
      <Skill/>
      <Project/>
    </div>
    </>
  )
}

export default Main
