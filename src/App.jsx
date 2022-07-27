import Dashboard from './components/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import TabPanel from './components/Section/Section'
import Category from './components/Category/Category';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Register />
       {/* <Navbar /> */}
       {/* <div className="App__content">
          <Sidebar />
          <div className="App__list">
              <Switch>
                  <Route path="/dashboard">
                      <Dashboard />
                  </Route>
                  <Route path="/lesson">
                     <TabPanel />
                  </Route>
                  <Route path="/category">
                      <Category />
                  </Route>
              </Switch>
          </div>
       </div> */}
    </div>
  );
}

export default App;
