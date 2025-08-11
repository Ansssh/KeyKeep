import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { Link, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // CHANGE: Imported AnimatePresence

const Layout = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div className={`w-full p-5 smxx ${theme === "light" ? "bg-ii" : "bg-main"} flex flex-col justify-between`}>
            <div className='flex flex-col'>
                <header className='flex items-center justify-between'>
                    <Link to={"/"} className={`text-lg sm:text-xl md:text-2xl font-play smxx ${theme === "light" ? "text-main" : "text-vv"} outline-none`}>KeyKeep</Link>
                    <div className='flex items-center gap-4'>
                        <button className={`text-xl font-bold smxx ${theme === "light" ? "text-main" : " text-vv"} cursor-pointer outline-none`} onClick={toggleTheme}>
                            {
                                theme === "dark" ? <i className="ri-sun-fill"></i> : <i className="ri-moon-fill"></i>
                            }
                        </button>

                        <Link to={"/login"} className={`px-4 py-2 rounded-full
                                        text-xs sm:text-sm md:text-base lg:text-base font-bold
                                        smxx ${theme === "dark" ? "bg-vv text-main" : "bg-main text-ii"} 
                                        cursor-pointer outline-none`}>
                            Login
                        </Link>
                    </div>
                </header>
            </div>
            
            {/* CHANGE: Wrapped Outlet with AnimatePresence for smooth transitions */}
            <AnimatePresence mode="wait">
                <Outlet />
            </AnimatePresence>
            
            <footer className={`smxx ${theme === "dark" ? "text-vv" : "text-main"} text-xs sm:text-base font-libre text-center`}>
                Developed with {theme === "dark" ? "❤️" : "🤍"} by Ansh Kumar
            </footer>
        </div>
    )
}

export default Layout;