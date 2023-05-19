
import './App.css';
import React from 'react'
import Home from './pages/Home'
import NetflixShow from './pages/NetflixShow'
import Footer from './components/Footer/Footer';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

export default function App() {
  return(
    <Router>
      <div className = "App">
      <Routes>
 
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/netflix-show" element = {<NetflixShow/>}/>
   
       </Routes>
      
      <Footer/>
      </div>
    </Router>
  )
}

