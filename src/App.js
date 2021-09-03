import Header from './components/Header'
import { Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Profile from './pages/Profile'
import Rating from './pages/Rating'
import Store from './pages/Store'
import './styles/main.css'
import Pages from './pages/Pages'
import { loadLinks, loadPages } from './redux/actions'
import { useEffect } from 'react'
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(loadLinks());
    dispatch(loadPages());
  }, [])


  return (
    <div>
      <Header />
      <SideBar/>
        <Route path='/:id?'>
           <Pages/>
        </Route>
    </div>
  );
}

export default App;
