import './Payment.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import deletes from '../../Assets/Img/delete.png';
import plus from '../../Assets/Img/plus.png'
import menu from '../../Assets/Img/menu.png'


function Payment(props) {


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

Payment.propTypes = {
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
      <div className="payment">
        <h2 className="payment__name">To’lov analizi</h2>
        <Box sx={{ width: '100%' }} className="payment__list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Guruhlar hammasi" {...a11yProps(0)} />
                <Tab label="Frontend 1" {...a11yProps(1)} />
                <Tab label="Backend 4" {...a11yProps(2)} />
                <Tab label="Web design 3" {...a11yProps(3)} />
                <Tab label="SMM Pro " {...a11yProps(4)} />
                <Tab label="Graphict design" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <Payment value={value} index={0}>
                
                <h3>Fronted 1 Guruhi Dars beruvchi: Ismoil aka</h3>
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

                <table className='payment__table'>
                    <thead>
                        <tr>
                        
                            <th>F,I,SH</th>
                            <th>Telfon raqami</th>
                            <th>Qo’shimcha raqam</th>
                            <th>To’lov qildi qimadi</th>
                        </tr>
                    </thead>
                   <tbody className='payment--item'>
                      {
                        Array.from(new Array(10)).map(e => (
                            <tr>
                                
                                <td className='payment--text'><input type="checkbox" /> Madaminov Abdurahmon</td>
                                <td className='payment--text'>+998 99 506 69 19</td>
                                <td className='payment--text'>+998 99 506 69 19</td>
                                <td className='payment--text'>
                                    <button className="payment__button">To'lov qilmadi</button>
                                </td>
                                <td className='payment__title'>
                                    <button className="payment__btn"><img src={menu} /></button>
                                </td>
                            </tr>
                        ))
                      }
                   </tbody>
                </table>
            </Payment>
            <Payment value={value} index={1}>
                Online kusrlar
            </Payment>
        </Box>
      </div>
  );
}