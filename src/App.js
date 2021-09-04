import Header from './components/Header'
import { Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Profile from './pages/Profile'
import './styles/main.css'
import Home from './pages/Home'
import Rating from './pages/Rating'
import Store from './pages/Store'
import Teams from './pages/Teams'
import Tasks from './pages/Tasks'

function App() {


  return (
    <div>
      <Header />
      <div className="container">
        <SideBar/>
        <div className="content">
          <Route path="/user_prof" component={Profile} />
          <Route exact path="/rating" component={Rating} />
          <Route path="/store" component={Store} />
          <Route path="/team" component={Teams} />
          <Route path="/task" component={Tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
