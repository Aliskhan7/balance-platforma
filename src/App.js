import Header from './components/Header'
import { Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Profile from './pages/Profile'
import './static/css/main.css'
import Rating from './pages/Rating'
import Store from './pages/Store'
import Teams from './pages/Teams'
import Tasks from './pages/Tasks'
import Login from './pages/Login'
import Cart from './pages/Cart'
import TypingGame from './pages/TypingGame'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { startProfile } from './redux/actions'

function App() {


  return (
    <div>
      {/*<Header />*/}
      <div className="container">
        <SideBar/>
        <div className="content">
          <Route path="/Login" component={Login} />
          <Route path="/user_prof" component={Profile} />
          <Route path="/rating" component={Rating} />
          <Route path="/store" component={Store} />
          <Route path="/team" component={Teams} />
          <Route path="/task" component={Tasks} />
          <Route path="/cart" component={Cart} />
          <Route path="/typingGame" component={TypingGame} />
        </div>
      </div>
    </div>
  );
}

export default App;
