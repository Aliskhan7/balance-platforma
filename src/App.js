import Header from './components/Header'
import { Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Profile from './pages/Profile'
import Rating from './pages/Rating'
import Store from './pages/Store'

function App() {
  return (
    <div>
      <Header />
      <SideBar/>
      <div className="content">
        <Route exact path="/Profile" component={Profile} />
        <Route path="/Rating" component={Rating} />
        <Route path="/Store" component={Store} />
      </div>
    </div>
  );
}

export default App;
