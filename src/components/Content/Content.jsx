import './Content.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import deletes from '../../Assets/Img/delete.png';
import plus from '../../Assets/Img/plus.png'


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
                            <input type="checkbox" /> 3ta tanlangan
                        </label>
                        <button className="content__delete">
                            <img src={deletes} alt="" className="category__img" /> O'chirish
                        </button>
                        <button className="content__plus">
                            <img src={plus} alt="" className="category__img" /> Qo'shish
                        </button>
                    </div>
                    <div className="content__item">
                        <input type="date" className="content__data" />
                        <h4>To</h4>
                        <input type="date" className="content__data" />
                    </div>
                 </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Online kusrlar
            </TabPanel>
        </Box>
      </div>
  );
}