import Dashboard from './components/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import TabPanel from './components/Section/Section'


function App() {
  return (
    <div className="App">
       <Navbar />
       <div className="App__content">
          <Sidebar />
          <div className="App__list">
              <Switch>
                  <Route path="/dashboard">
                      <Dashboard />
                  </Route>
                  <Route path="/lesson">
                     <TabPanel />
                  </Route>
              </Switch>
          </div>
       </div>
    </div>
  );
}

export default App;
