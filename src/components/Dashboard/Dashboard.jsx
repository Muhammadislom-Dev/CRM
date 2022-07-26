import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.scss'

import vector from '../../Assets/Img/vactor.png'
import Progress from '../Progress/Progress';
import { Rating } from '@mui/material';

const Dashboard = () => {
    return(
        <div className="dashboard">
           <div className="dashboard__page">
                <div className="dashboard__list">
                    <div className="dashboard__item">
                        <h4 className="dashboard__name">2020 yil</h4>
                        <p className="dashboard__text">Odam soni ko'payishi</p>
                        <p className="dashboard--number">4000 <img src={vector} alt="" className="dashboard__img" /> <span className="dashboard__span">7%</span></p>
                    </div>
                    <div className='dashboard--item' style={{ width: 140, height: 140 }}>
                        <p className="dashboard__number">65% <span className='dashboard--span'>Yangi kelganlar</span></p>
                        <CircularProgressbar  value={65} />
                    </div>
                </div>

                <div className="dashboard__list">
                    <div className="dashboard__item">
                        <h4 className="dashboard__name">2020 yil</h4>
                        <p className="dashboard__text">Guruhdan chiqib ketganlar</p>
                        <p className="dashboard--number">4000 <img src={vector} alt="" className="dashboard__img" /> <span style={{backgroundColor:"#CC4025"}} className="dashboard__span">10%</span></p>
                    </div>
                    <div className='dashboard--items' style={{ width: 140, height: 140 }}>
                        <p className="dashboard__numbers">20% <span className='dashboard--span'>Yangi kelganlar</span></p>
                        <CircularProgressbar  value={20} />
                    </div>
                </div>

                <div className="dashboard__list">
                    <div className="dashboard__item">
                        <h4 className="dashboard__name">2020 yil</h4>
                        <p className="dashboard__text">Darslarga yozilganlar</p>
                        <p className="dashboard--number">300 <img src={vector} alt="" className="dashboard__img" /> <span style={{backgroundColor:"#FFCA26"}} className="dashboard__span">7%</span></p>
                    </div>
                    <div className='dashboard--item' style={{ width: 140, height: 140 }}>
                        <p className="dashboard__num">10% <span className='dashboard--span'>Yangi kelganlar</span></p>
                        <CircularProgressbar  value={10} />
                    </div>
                </div>
           </div>
           <Progress />
           {/* <Rating /> */}
        </div>
    )
}
export default Dashboard