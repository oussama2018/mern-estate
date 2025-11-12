import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Header from './Header';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
