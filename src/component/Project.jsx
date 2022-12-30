import React from 'react'
import './css/project.css'
// import omsalunke from './img/omsalunke.jpg'
function Project() {

  return (
    <>
      <div id='project' className='project_section'>
        <h1 className='project_title'>My Project</h1>
        <div className='project_container'>
        <div className="swiper">
  <div className="swiper-wrapper">
    <div className="swiper-slide"><div className='img img_1'></div>
    <h2 className='project_h2'>Netflix Clone</h2>
    <button className='project_btn'>Download</button>
    </div>
    <div className="swiper-slide"><div className='img img_2'></div>
    <h2 className='project_h2'>Disney Clone</h2>
    <button className='project_btn'>Download</button>
    </div>
    <div className="swiper-slide"><div className='img img_3'></div>
    <h2 className='project_h2'>Ola Clone</h2>
    <button className='project_btn'>Download</button>
    </div>
    <div className="swiper-slide"><div className='img img_4'></div>
    <h2 className='project_h2'>youtube Clone</h2>
    <button className='project_btn'>Download</button>
    </div>

  </div>
</div>
        </div>
      </div>
    </>
  )
}

export default Project
