import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/userContext';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserHome from './pages/UserHome';


function App() {

    return (
        <>
            <ThemeProvider>
                <UserProvider>
                    <div className='flex flex-col h-screen'>
                        <BrowserRouter>
                            <div className='flex flex-1'>
                                <Routes>
                                    <Route element={<Layout />}>
                                        <Route path='' element={<Home />}></Route>
                                        <Route path='login' element={<Login />}></Route>
                                        <Route path='signup' element={<Signup />}></Route>
                                    </Route>
                                    <Route path='home' element={<UserHome />}></Route>
                                </Routes>
                            </div>
                        </BrowserRouter>
                    </div>
                </UserProvider>
            </ThemeProvider>
        </>
    )
}

export default App
