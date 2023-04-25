import React from 'react'
import About from './about'
import { Route,Routes ,Link} from 'react-router-dom'
import Traditional from './traditional'
import Contact from './contact'
import Login from './login'
import Western from './western'
import Order from './order'


export default function Home() {
  return (
    <div> 
   
    <div className='heading'>
    <h1><b>RUBY</b><br></br>FASHION BOTIQUE
    </h1>
    <br></br>
   
    <Link to="/traditional"><button className='btn btn-danger'>Traditional</button></Link>
    <Link to="/western"><button className='btn btn-success'>Western</button></Link>
    <Link to="/contact"><button className='btn btn-primary'>Contact</button></Link>
    <Link to="/about"><button className='btn  btn-warning'>About</button></Link>
    <Link to="/login"><button className='btn btn-danger'>Login</button></Link>
    <Link to="/order"><button className='btn btn-success'>Order</button></Link>
    <br></br><br></br>
    <hr></hr>
   
    </div>
    <Routes>
   <Route path ='/traditional' element={<Traditional/>} />
   <Route path ='/contact' element={<Contact/>} />
   <Route path ='/login' element={<Login/>} />
   <Route path ='/western' element={<Western/>} />
   <Route path ='/about' element={<About/>} />
   <Route path ='/order' element={<Order/>} />
    </Routes></div>
  
  )
}