import './UserStudent.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import deletes from '../../Assets/Img/delete.png';
import plus from '../../Assets/Img/plus.png'
import menu from '../../Assets/Img/menu.png'


function UserStudent(props) {


  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

UserStudent.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="userstudent">
        <h2 className="userstudent__name">Bizdagi talabalar</h2>
        <Box sx={{ width: '100%' }} className="userstudent__list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Offlineda o’qidigan talabalar " {...a11yProps(0)} />
                <Tab label="Onlineda o’qidigan talabalar " {...a11yProps(1)} />
                </Tabs>
            </Box>
            <UserStudent value={value} index={0}>

                <div className="content__title">
                    <div className="content__item">
                        <label htmlFor="">
                           <input type="checkbox" /> 3ta tanlangan
                        </label>
                        <button className="content__delete">
                            <img src={deletes} alt="" className="category__img" /> O'chirish
                        </button>
                        <button  className="content__plus">
                            <img src={plus} alt="" className="category__img" /> Qo'shish
                        </button>
                    </div>
                    <div className="content__item">
                        <input type="date" className="content__data" />
                        <h4>To</h4>
                        <input type="date" className="content__data" />
                    </div>
                 </div>

                <table className='userstudent__table'>
                    <thead>
                        <tr>
                        
                            <th>F,I,SH</th>
                            <th>Telfon raqami</th>
                            <th>Qaysi fanda o’qiydi</th>
                            <th>Ustozi kim</th>
                        </tr>
                    </thead>
                   <tbody className='userstudent--item'>
                      {
                        Array.from(new Array(10)).map(e => (
                            <tr>
                                
                                <td className='userstudent--text'><input type="checkbox" /> Madaminov Abdurahmon</td>
                                <td className='userstudent--text'>+998 99 506 69 19</td>
                                <td className='userstudent--text'>Backend Fullstack</td>
                                <td className='userstudent--text'>Xumoyun</td>
                                <td className='userstudent__title'>
                                    <button className="userstudent__btn"><img src={menu} /></button>
                                </td>
                            </tr>
                        ))
                      }
                   </tbody>
                </table>
            </UserStudent>
            <UserStudent value={value} index={1}>
                Online kusrlar
            </UserStudent>
        </Box>
      </div>
  );
}