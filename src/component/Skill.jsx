import React from 'react'
import './css/skill.css'
function Skill() {
  return (
    <>
      <div id="skill" className='skill_section'>
        <h1>My Skills</h1>
        <div className='skill_subtitle'>
            <div className='line'></div>
            <div className='skill_subtitle_title'>Skills I Know</div>
            <div className='line'></div>
        </div>
        <div className='skill_container'>
            <div className='skill_info'>
                <h1 className='skill_info_title'>My Creative Skill</h1>
                <p>hi guys<b></b>
Basically I'm a front end developer having no work experince, in my whole journy i have created lots of project like cloneing websites,shopping web,protofolio website,etc language that i learn are html ,css,javascript,react-js,c,c++,latex</p>
            </div>
            <div className='skill_percentage'>  
                <div className='percentage_skill'>
                    <h3>HTML</h3>
                    <h4>93%</h4>
                    <div className='skill_bar sb1'>
                    <div className=''></div>
                    </div>
                </div>
                <div className='percentage_skill'>
                    <h3>CSS</h3>
                    <h4>85%</h4>
                    <div className='skill_bar sb2'>
                    <div></div>
                    </div>
                </div>
                <div className='percentage_skill'>
                    <h3>JS</h3>
                    <h4>72%</h4>
                    <div className='skill_bar sb3'>
                    <div></div>
                    </div>
                </div>
                <div className='percentage_skill'>
                    <h3>REACT JS</h3>
                    <h4>80%</h4>
                    <div className='skill_bar sb4'>
                    <div></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Skill
