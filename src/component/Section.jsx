import React from 'react'
import './css/section.css';
// import './rounder.js'
function Section(){
//   window.onload = function () {
// let h1= document.getElementById('skill_name_span');
// let name =["web developer","ui designer","web developer"];
// let countletter=0;
// let count =0;

// update();
// function update()
// {   countletter++;
//     h1.innerText =" "+name[count].slice(0,countletter);
//     if(countletter===name[count].length)
//     {
//         count++
//         countletter=0;
//     }
//     if (count===name.length) {
//         count=0;
//     }
    
//     setTimeout(update,400);
// }
//   }
  return (
    <>
      <div id='home' className='home_page_section '>
        <div className='home_page_container'>
            <div className='home_page_profile'>
                <div className='profile_img'></div>
            </div>
            <div className='home_page_profile_detail'>
                <div className='profile_detail'>
                    <h2>hi there</h2>
                    <h2>i'm om salunke</h2>
                   <p id='skill_name'>I'm into<span id="skill_name_span">front developer</span>
                    </p>
                    <button className='home_about_btn'>About me</button>
                </div>
                <div className='social_media_link'>
                    <div className='social_media_btn'><i className="fa-brands fa-whatsapp"></i></div>
                    <div className='social_media_btn'><i className="fa-brands fa-youtube"></i></div>
                    <div className='social_media_btn'><i className="fa-brands fa-twitter"></i></div>
                    <div className='social_media_btn'><i className="fa-brands fa-instagram"></i></div>
                    <div className='social_media_btn'><i className="fa-brands fa-facebook"></i></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Section;
