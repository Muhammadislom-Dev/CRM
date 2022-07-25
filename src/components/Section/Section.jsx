import './Section.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Api from '../API'
import menu from '../../Assets/Img/menu.png'


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

  return (
      <div className="section">
        <h2 className="section__name">Bizda bor kurslar</h2>
        <Box sx={{ width: '100%' }} className="section__list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Offline kusrlar" {...a11yProps(0)} />
                <Tab label="Online kusrlar" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <table className='section__table'>
                    <thead>
                        <tr>
                        
                            <th> <input type="checkbox" />Yo’nalish</th>
                            <th>Mavzu</th>
                            <th>Dars kuni</th>
                            <th>Dars vaqti</th>
                            <th>Holati</th>
                            <th>Qo’shimcha</th>
                        </tr>
                    </thead>
                   <tbody className='section--item'>
                      {
                        Api.map((item) => (
                            <tr>
                                
                                <td className='section--text'><input type="checkbox" /> {item.title}</td>
                                <td className='section--text'>{item.topic}</td>
                                <td className='section--text'>{item.day}</td>
                                <td className='section--text'>{item.data}</td>
                                <td className="section--text"><button className="section--btn">{item.condition}</button></td>
                                <td className='section__text'>{item.addtion}</td>
                                <td className='section__title'>
                                    <button className="section__btn"><img src={menu} /></button>
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
      </div>
  );
}