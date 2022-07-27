import './Content.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import deletes from '../../Assets/Img/delete.png';
import plus from '../../Assets/Img/plus.png'
import menu from '../../Assets/Img/menu.png'
import Modals from '../Modals/Modals'
import {useState} from 'react'




function TabPanel(props) {

  

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

TabPanel.propTypes = {
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


  const [korzinkaModal, setKorzinkaModal]=useState(false);

    function openKorzinkaModal(){
        setKorzinkaModal(!korzinkaModal);
    } 

  return (
      <div className="content">
        <Box sx={{ width: '100%' }} className="content__list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Offline kusrlar" {...a11yProps(0)} />
                <Tab label="Online kusrlar" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                 <div className="content__title">
                    <div className="content__item">
                        <label htmlFor="">
                            3ta tanlangan
                        </label>
                        <button className="content__delete">
                            <img src={deletes} alt="" className="category__img" /> O'chirish
                        </button>
                        <button onClick={() => openKorzinkaModal()} className="content__plus">
                            <img src={plus} alt="" className="category__img" /> Qo'shish
                        </button>
                    </div>
                    <div className="content__item">
                        <input type="date" className="content__data" />
                        <h4>To</h4>
                        <input type="date" className="content__data" />
                    </div>
                 </div>

                 <table className='content__table'>
                    <thead>
                        <tr className='content__items'>
                            <th className='content__names'>Guruhlar</th>
                            <th className='content__names'>Dars vaqti</th>
                            <th className='content__names'>Start time</th>
                            <th className='content__names'>O’quvchilar soni</th>
                        </tr>
                    </thead>
                    <tbody className='content__tbody'>
                        {
                          Array.from(new Array(9)).map(e => (
                            <tr>
                                <td className='content__name'><input type="checkbox" /> Vuej g2 guruhi</td>
                                <td className='content__name'>13:00:00</td>
                                <td className='content__name'>2021-08-14</td>
                                <td className='content__name'>30+ ta o’quvchi</td>
                                <td>
                                    <button className="content__btn"><img src={menu} /></button>
                                </td>
                            </tr>
                          ))
                        }
                    </tbody>
                 </table>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Online kusrlar
            </TabPanel>
        </Box>

          <div  className="content__modal">
            <Modals  show={korzinkaModal}>
              <button className='content__close' onClick={()=>setKorzinkaModal()}>&times;</button>
                <h2 className="content__modal--name">Guruhga qo'shish</h2>
                <form action="" className="content__form">
                    <label htmlFor="" className="content__label">Guruh
                        <input type="text" required className="content__input" />
                    </label>
                    <label htmlFor="" className="content__label">Star time
                        <input type="text" required className="content__input" />
                    </label>
                    <label htmlFor="" className="content__label">Dars vaqti
                        <input type="text" required className="content__input" />
                    </label>
                    <label htmlFor="" className="content__label">O’quvchilar soni
                        <input type="text" required className="content__input" />
                    </label>
                    <button type='submit' className="content__button">Kursni joylash</button>
                </form>
            </Modals>
          </div>
      </div>
  );
}

