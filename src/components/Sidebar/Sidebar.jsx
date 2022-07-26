import './Sidebar.scss'

//Icons
import Dashboard from '../../Assets/SVG/Dashboard'
import Lesson from '../../Assets/SVG/Lesson'
import Group from '../../Assets/SVG/Group'
import Table from '../../Assets/SVG/Table'
import Student from '../../Assets/SVG/Student'
import Attendance from '../../Assets/SVG/Attendance'
import Payment from '../../Assets/SVG/Payment'
import { Link } from 'react-router-dom'



const Sidebar = () => {

    const handleAddClass = (evt) =>{
        const links = document.querySelectorAll('.sidebar__link-active');
        links.forEach(link =>{
         link.classList.remove('sidebar__link-active')
        })
        evt.currentTarget.classList.add('sidebar__link-active')
      }

    return(
        <div className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <Link onClick={handleAddClass} to="/dashboard" className="sidebar__link"><Dashboard /> Dashboard</Link>
                </li>
                <li className="sidebar__item">
                    <Link onClick={handleAddClass} to="/lesson" className="sidebar__link"><Lesson /> Kurslar</Link>
                </li>
                <li className="sidebar__item">
                    <Link onClick={handleAddClass} to="/category" className="sidebar__link"> <Group /> Guruhlar</Link>
                </li>
                <li className="sidebar__item">
                    <Link onClick={handleAddClass} to="#" className="sidebar__link"><Table />  Dars jadvali</Link>
                </li>
                <li className="sidebar__item">
                    <Link onClick={handleAddClass} to="#" className="sidebar__link"><Student /> Talabalar</Link>
                </li>
                <li className="sidebar__item">
                    <Link onClick={handleAddClass} to="#" className="sidebar__link"><Attendance /> Davomat</Link>
                </li>
                <li className="sidebar__item">
                    <Link onClick={handleAddClass} to="#" className="sidebar__link"><Payment />  To’lovlar</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar