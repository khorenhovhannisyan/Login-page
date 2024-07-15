import CreateAccount from './components/createAccount/CreateAccount'
import { useState } from 'react'
import './App.css'
import ChoosePassword from './components/choosePassword/ChoosePassword'
import {Routes,Route} from "react-router-dom"
import Login from "./components/login/Login"
import LoginLayout from './components/layout/LoginLayout'
import ChooseStaff from './components/chooseStaff/ChooseStaff'
function App() {
  const [comp,setComp]=useState(false)

  return (
  <div>
    <Routes>
      <Route path='/' element={<CreateAccount/>}/>
      <Route  element={<LoginLayout comp={comp}/>}>
      <Route path='/ChoosePassword' element={<ChoosePassword setComp={setComp} />}/>
      <Route path='/ChooseStaff' element={<ChooseStaff/>}/>
      </Route>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  </div>
  )
}

export default App
