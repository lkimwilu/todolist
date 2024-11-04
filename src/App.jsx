import { useState } from 'react'
import './App.css'
import Todolist from './components/todolist/todolist'
import Todolistform from './components/todolistform/todolistform'
import Gallery from './components/gallery/gallery'
import Users from './components/users/users'
import CreateUser from './components/users/Create_user/CreateUser'
import Resource from './components/resource/resource'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Todolist /> */}
      {/* <Todolistform/> */}
      {/* <Users/> */}
      {/* <CreateUser/> */}
      {/* <Gallery /> */}
      <Resource/>
      
    </>
  )
}

export default App
