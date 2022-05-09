import Logotitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import {useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
const Home = () =>{

    const[letterclass] = useState('text-animate');
    const nameArray = ['o','u','r','e','l','d','i','n'];
    const jobArray = ['W','e','b','','D','e','v','e','l','o','p','e','r','.'];


    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterclass}>H</span>
                <span className={`${letterclass} _12`}>i,</span>
                <br/>
                <span className={`${letterclass} _13`}>I</span>
                <span className={`${letterclass} _14`}>'m</span>

                <img src={Logotitle} alt="developer"/>
                <AnimatedLetters letterclass={letterclass}
                strArray={nameArray}
                idx={15}
                />
                <br/>
                <AnimatedLetters letterclass={letterclass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Developer / UI and UX designer</h2>
                <Link to="/contact" className='flat-button'>Contact me</Link>
            </div>
            <Logo/>
           </div>
           
    )
}

export default Home