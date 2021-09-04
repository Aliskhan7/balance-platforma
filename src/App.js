import Header from './components/Header'
import { Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Profile from './pages/Profile'
import Rating from './pages/Rating'
import Store from './pages/Store'
import Login from './pages/Login'

function App() {
  return (
    <div>
      {/* <Header />
      <SideBar/> */}
      <div className="content">
        <Route exact path="/Profile" component={Profile} />
        <Route path="/Rating" component={Rating} />
        <Route path="/Store" component={Store} />
        <Route path='/Login' component={Login} />
      </div>
    </div>
  );
}

export default App;
