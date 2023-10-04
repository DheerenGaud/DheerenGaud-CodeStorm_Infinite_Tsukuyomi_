import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientDashBord from './layouts/DashBoard.jsx';
import ErrorPage from './pages/error/ErrorPage.jsx';
import General from './pages/users/General.jsx';
import AddEvent from './pages/users/AddEvent.jsx';
import SignInForm from './pages/SignInForm.jsx';
import SignUpForm from './pages/SignUpForm.jsx';
import Verifyed from './pages/verifyed.jsx';
import AllEvent from './pages/users/AllEvent.jsx';

const loginStatus=window.localStorage.getItem("loginStatus")
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        
        <Route path="/user/verify/:userId/:uniqueString/" element={<Verifyed />}/>
        <Route path='/signin' element={<SignInForm/>}/>
        <Route path='/signup' element={<SignUpForm/>}/>
        <Route path='/client' element={loginStatus==="true"?<ClientDashBord/>:<SignInForm/>}>
          <Route index element={<General texts="General"/>} />
          <Route path='add-event' element={<AddEvent />} />
          <Route path='all-event' element={<AllEvent/>} />
          <Route path='billing' element={<General texts="Billing"/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
)
