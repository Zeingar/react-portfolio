import { text } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Contact = ()=>{
    const[letterclass] = useState('text-animate')
    return(
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
        <AnimatedLetters 
        letterclass={letterclass}
        strArray={['C','o','n','t','a','c','t',' ','M','e']}
            idx={15}
            />
            </h1>
        
        <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type={text} name='name' placeholder='Name' required></input>
                    </li>
                    <li className='half'>
                        <input type={text} name='Email' placeholder='Email' required></input>
                    </li>
                    <li>
                        <input type={text} name='Subject' placeholder='Subject' required></input>
                    </li>
                    <li>
                        <textarea name=',message' placeholder='Message' ></textarea>
                    </li>
                    <li>
                        <input type="submit" className='flatbutton' value="send"/>
                    </li>
                </ul>

            </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Contact