import './index.scss';
import { Link,NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import Discord from '../../assets/images/discord.png';
import Linkedin from '../../assets/images/Linkedin.png';
import Twitter from '../../assets/images/twitter.png';
import Facebook from '../../assets/images/facebook.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar =() =>(
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img className='img' src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="noureldin"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
          </NavLink>
  
        </nav>
        <ul>
            <li>
                <a  target="_blank"rel="noreferrer"href="https://www.linkedin.com/in/noureldin-hassan-3a1076198/">
                    <img className='linkpng' src={Linkedin} alt="Linkedin"></img>
                </a>
                </li>
                <li>
                <a  target="_blank"rel="noreferrer"href="discordapp.com/users/Zeingar#5296">
                    <img className='linkpng' src={Discord} alt="Discord"></img>
                </a>
                </li>
                <li>
                <a  target="_blank"rel="noreferrer"href="https://twitter.com/NoureldinMahm69">
                    <img className='linkpng' src={Twitter} alt="Twitter"></img>
                </a>
                </li>
                <li>
                <a  target="_blank"rel="noreferrer"href="https://www.facebook.com/noureldin.mahmoud.77">
                    <img className='linkpng' src={Facebook} alt="Facebook"></img>
                </a>
                </li>
        
        </ul>
        </div>
)

export default Sidebar