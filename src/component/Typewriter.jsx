import React,{useEffect, useRef, useState} from 'react';
function Typewriter({text}) {
    const index=useRef(0);
// const [text,settext] = useState('omsalunke')
const [currenttext,setcurrenttext]= useState('');
useEffect(()=>{
    setTimeout(() => {
        setcurrenttext((value)=>value+text.charAt(index.current));
        index.current+=1;
        console.log(text.length);
    }, 1000);
    if(index.current===text.length-1){
        index.current=0;
        setcurrenttext(' ');
        console.log(index.current);
    }
},[currenttext]);
  return <span>{currenttext}</span>
}

export default Typewriter
