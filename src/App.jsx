import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from './pages/Dashboard';

import { AuthProvider } from "../src/context/AuthContext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer/>

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/password-reset/:token' element={<ResetPassword/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
