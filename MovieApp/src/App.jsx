import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewmovies from './components/Viewmovies'
import Addmovies from './components/Addmovies'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
<div>
  <Navbar />
  <Routes>
        
        <Route path='/view'element={<Viewmovies />}></Route>
        
        <Route path='/add'element={<Addmovies />}></Route>
        
      </Routes>
</div>
)
}
export default App
