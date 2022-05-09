import './index.scss'
import logos from "../../../assets/images/sideimage.png" 

const Logo = () =>{
    return(
        <div className='logo-container'>
            <img className='solid-logo' src={logos} alt="N"/>
           
        </div>
    )
}

export default Logo