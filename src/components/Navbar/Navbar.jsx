import { Link } from 'react-router-dom'
import './Navbar.scss'
import notification from '../../Assets/Img/notifications.png'
import person from '../../Assets/Img/person.png'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link className='navbar__name'>Zako IT Academy</Link>
            <input type="search" className="navbar__input" placeholder='Global search' />
            <ul className="navbar__list">
                <li className="navbar__item">
                    <h3 className="navbar__names">Open for Destop</h3>
                </li>
                <li className="navbar__item">
                    <img src={notification} alt="" className="navbar__img" />
                </li>
                <li className="navbar__item">
                    <img src={person} alt="" className="navbar__img" />
                </li>
            </ul>
        </div>
    )
}
export default Navbar