import './UserTable.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import deletes from '../../Assets/Img/delete.png';
import plus from '../../Assets/Img/plus.png'
import menu from '../../Assets/Img/menu.png'


function UserTable(props) {


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

UserTable.propTypes = {
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
      <div className="usertable">
        <h2 className="usertable__name">Dars jadvali</h2>
        <Box sx={{ width: '100%' }} className="usertable__list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Juft kunlarni jadvali" {...a11yProps(0)} />
                <Tab label="Toq kunlari jadvali" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <UserTable value={value} index={0}>

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

                <table className='usertable__table'>
                    <thead>
                        <tr>
                        
                            <th> Dars soati</th>
                            <th>Fani</th>
                            <th>Ustozi</th>
                            <th>Probni</th>
                            <th>O’quvchi soni</th>
                            <th>Dars soni</th>
                        </tr>
                    </thead>
                   <tbody className='usertable--item'>
                      {
                        Array.from(new Array(10)).map(e => (
                            <tr>
                                
                                <td className='usertable--text'><input type="checkbox" /> 07:00-09:00</td>
                                <td className='usertable--text'>Biologiya</td>
                                <td className='usertable--text'>Akobir</td>
                                <td className='usertable--text'>8 ta</td>
                                <td className="usertable--text">10tadan 8ta keldi</td>
                                <td className='usertable--text'>10ta haftasiga</td>
                                <td className='usertable__title'>
                                    <button className="usertable__btn"><img src={menu} /></button>
                                </td>
                            </tr>
                        ))
                      }
                   </tbody>
                </table>
            </UserTable>
            <UserTable value={value} index={1}>
                Online kusrlar
            </UserTable>
        </Box>
      </div>
  );
}