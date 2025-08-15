import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion'; // CHANGE: Imported motion

const Home = () => {
    // CHANGE: Removed unused `toggleTheme` import
    const { theme } = useContext(ThemeContext);
    return (
        // CHANGE: Wrapped the main div with motion.div for animations
        <motion.div 
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col'
        >
            <h2 className={`text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 sm:mt-12 md:14 lg:mt-16 smxx ${theme === "dark" ? "text-vv" : "text-main"} `}>Go Ahead. Forget your <span className='font-shadows'>passwords!</span></h2>
            <p className={`text-center font-light text-base sm:text-lg md:text-xl lg:text-2xl self-center w-70 xs:w-100 sm:w-140 md:w-160 mt-3 sm:mt-4 md:mt-5 lg:mt-6 smxx ${theme === "dark" ? "text-vv" : "text-main"} `}>KeyKeep remembers all of them for you. Save all your passwords and login into sites with a single click. Its that simple!</p>

            <Link to={"/signup"} className={`flex w-fit self-center items-center justify-center ${theme === "dark" ? "bg-vv text-main" : "bg-main text-ii"} rounded-full py-2 px-5 gap-1 my-4 sm:my-5 md:my-6 lg:my-7 text-xs sm:text-base md:text-lg lg:text-xl font-bold cursor-pointer active:scale-95 transition-all duration-200 ease-in-out`}>
                Get Started
                <i className="ri-arrow-right-long-line"></i>
            </Link>

            <div className='flex flex-col md:flex-row gap-2 self-center mb-5 flex-wrap'>
                <div className={`flex flex-col gap-1 justify-center items-center smxx ${theme === "dark" ? "bg-v" : "bg-[#004063]"} text-main p-4 rounded-lg flex-1 lg:max-w-90`}>
                    <i className={`ri-safe-3-fill text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-[2px]`}></i>
                    <h3 className={`text-center text-base sm:text-lg text-nowrap font-bold`}>Store sensitive information</h3>
                    <p className='text-xs text-center font-light'>Passwords, Credit Cards, Web Notes and personal information - keep it all secured in one place.</p>
                </div>
                <div className={`flex flex-col gap-1 justify-center items-center smxx ${theme === "dark" ? "bg-v" : "bg-[#004063]"} text-main p-4 rounded-lg flex-1 lg:max-w-90`}>
                    <i className={`ri-global-line text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-[2px]`}></i>
                    <h3 className={`text-center text-base sm:text-lg text-nowrap font-bold`}>Easy access from anywhere</h3>
                    <p className='text-xs text-center font-light'>Access all the stored passwords, keys and sensitive information from anytime, anywhere in the world.</p>
                </div>
                <div className={`flex flex-col gap-1 justify-center items-center smxx ${theme === "dark" ? "bg-v" : "bg-[#004063]"} text-main p-4 rounded-lg flex-1 lg:max-w-90`}>
                    <i className={`ri-customer-service-2-line text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-[2px]`}></i>
                    <h3 className={`text-center text-base sm:text-lg text-nowrap font-bold`}>All-in-one solution</h3>
                    <p className='text-xs text-center font-light'>A trusty app that keeps all your secrets in one safe place, like a vault for your virtual treasures</p>
                </div>
            </div>

            <div className={`text-center pb-4 smxx ${theme === "dark" ? "text-vv" : "text-main"} text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold`}>
                A password manager that{" "}
                <span className="relative inline-block mx-1">
                    <span className={`relative z-10 smxx ${theme === "dark" ? "text-vv" : "text-main"}`}>Sync</span>
                    <span className={`absolute -left-2 sm:top-1 w-[150%] sm:w-[140%] h-[90%] border-2 smxx ${theme === "dark" ? "border-v" : "border-i"} rounded-[50%] -rotate-12 z-0`}></span>
                </span>{" "}
                across devices.
            </div>
        </motion.div>
    );
};

export default Home;