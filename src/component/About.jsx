import React from 'react'
import './css/about.css'

function About() {
  return (
    <>
    <div id='about' className='about_section'>
        <h1 className='about_section_title' >About Me</h1>
        <div className='about_container'>
    <div className='about_img'></div>
    <div className='about_info'>
        <h1>I'm Om</h1>
        <h1 className='about_full'>FullStack Developer</h1>
        <p>I am a Front developer based in Malegoan, India. I am an Computer Technolog. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills.</p>
        <p className='about_info_detail'><span className='blue_color'>Age</span>18</p>
        <p className='about_info_detail'><span className='blue_color'>Email</span>salunkeom474@gmail.com</p>
        <p className='about_info_detail'><span className='blue_color'>place</span>Malegaon</p>
        <p className='about_info_detail'><span className='blue_color'>Phone</span>+918390471333</p>
    </div>
        </div>
    </div>  
    </>
  )
}

export default About
