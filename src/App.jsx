import { useState } from 'react'
import './App.css'
import Login from './Login/Login'
import Header from './Header/Header'
import List from './List/List'
import Projects from './Projects/Projects'

function App() {


  return (
    <>
      <Header/>
      <List/>
      <Projects/>
    </>
  )
}

export default App
