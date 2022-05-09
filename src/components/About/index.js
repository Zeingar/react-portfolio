import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import React, { useState } from 'react';
import Reactlogo from "../../assets/images/logo4.png"
import Htmllogo from "../../assets/images/logo1.png"
import CSSlogo from "../../assets/images/logo2.png"
import jslogo from "../../assets/images/logo3.png"
import sass from "../../assets/images/logo5.png"
import adobexd from "../../assets/images/logo6.png"


const About =() =>{
    const[letterclass] = useState('text-animate')

    
    return(
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterclass={letterclass}
                strArray={['A','b','o','u','t','m','e']}
                idx={15}
                />
                </h1>
                <p>hello there,I am noureldin a self taught webdeveloper and mechanical engineering student,yet  webdevelopment
                 captured what i seek the most discovry for the latest tech out there,my expertise lies within html css and react
                 thats just a start you can check more of my skills to the right,need help with a project? well click contact me lets have a chat...
            </p>

                    </div> 
                    <div className='stage-cube-cont'>
                    <div className='cube-spinner'>
                        <div className='face1'>
                           <img src={Reactlogo} alt='react'/>
                        </div>
                        <div className='face2'>
                           <img src={Htmllogo} alt='html'/>
                        </div>
                        <div className='face3'>
                           <img src={sass} alt='sass'/>
                        </div>
                        <div className='face4'>
                           <img src={adobexd} alt='adobexd'/>
                        </div>
                        <div className='face5'>
                           <img src={CSSlogo} alt='csslogo'/>
                        </div>
                        <div className='face6'>
                           <img src={jslogo} alt='jslogo'/>
                            </div>
                        </div>
                    </div>
                </div>
            
       
    )
}


export default About