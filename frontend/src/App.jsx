import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';

function App() {

    return (
        <>
            <ThemeProvider>
                <div className='flex flex-col h-screen'>
                    <BrowserRouter>
                        <div className='flex flex-1'>
                            <Routes>
                                <Route index element={<Home />}></Route>
                            </Routes>
                        </div>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
