import React from 'react'
import './css/navbar.css';
// import './rounder'
function Navbar() {
 
  // window.onload = function () {
  //   let nav_option=document.getElementsByClassName("nav_option")[0];
  //   let sidebar=document.getElementsByClassName("sidebar")[0];
  //   //     let main = document.getElementsByClassName("main")[0];
  //   // main.addEventListener("click",()=>{
  //   //     nav_option.classList.toggle("nav_option_click");
  //   // })
  //   sidebar.addEventListener('click',()=>{
  //           console.log("clicked");
  //           nav_option.classList.toggle("nav_option_click");
  //           if(sidebar.innerHTML===`<i className="fa-solid fa-bars fa-1.3x"></i>`){
  //           sidebar.innerHTML=`<i className="fa-solid fa-xmark"></i>`;
  //           }
  //           else{
  //               sidebar.innerHTML=`<i className="fa-solid fa-bars fa-1.3x"></i>`
  //           }
  //   })
  // }
  return (
    <div className='header'>
      <nav className='head'>
        <div className='logo'></div>
        <div className='sidebar'><i className="fa-solid fa-bars fa-1.3x"></i></div>
        <div className='nav_option'>
            <ul>
                <li><a href='#home'>home</a></li>
                <li><a href='#about'>about</a></li>
                <li><a href='#skill'>skill</a></li>
                <li><a href='#project'>project</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
