import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div className={`w-full p-5 pb-0 ${theme === "light" ? "bg-ii" : "bg-main"} flex flex-col`}>
            <header className='flex items-center justify-between'>
                <h1 className={`text-lg sm:text-xl md:text-2xl font-play ${theme === "light" ? "text-main":"text-vv"}`}>KeyKeep</h1>
                <div className='flex gap-2'>
                    {theme === "dark" ? <>
                        
                    </> : <>
                        
                    </>}
                    <button className={`px-4 py-2 rounded-full
                                       text-xs sm:text-sm md:text-base lg:text-base font-bold
                                       ${theme === "dark" ? "bg-vv text-main" : "bg-main text-ii"} 
                                       cursor-pointer`} onClick={toggleTheme}>
                        Login
                    </button>
                    <button className={`px-4 py-2 rounded-full
                                       text-xs sm:text-sm md:text-base lg:text-lg font-bold
                                       bg-transparent ${theme === "dark" ? "text-vv" : "text-main"} 
                                       cursor-pointer
                                       hidden sm:block`}>
                        Sign Up
                    </button>
                </div>
            </header>
            <h2 className={`text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 sm:mt-12 md:14 lg:mt-16 ${theme === "dark" ? "text-vv" : "text-main"} `}>Go Ahead. Forget your <span className='font-shadows'>passwords!</span></h2>
            <p className={`text-center font-light text-base sm:text-lg md:text-xl lg:text-2xl self-center w-70 xs:w-100 sm:w-140 md:w-160 mt-3 sm:mt-4 md:mt-5 lg:mt-6 ${theme === "dark" ? "text-vv" : "text-main"} `}>KeyKeep remembers all of them for you. Save all your passwords and login into sites with a single click. Its that simple!</p>

            <button className={`flex w-fit self-center items-center justify-center ${theme === "dark" ? "bg-vv text-main" : "bg-main text-ii"} rounded-full py-2 px-5 gap-1 my-4 sm:my-5 md:my-6 lg:my-7 text-xs sm:text-base md:text-lg lg:text-xl font-bold cursor-pointer`}>
                Get Started
                <i className="ri-arrow-right-long-line"></i>
            </button>

            <div className='flex flex-col md:flex-row gap-2 self-center mb-5'>
                <div className={`flex flex-col gap-1 justify-center items-center ${theme === "dark" ? "bg-v" : "bg-[#004063]"} text-main p-4 rounded-lg flex-1 lg:max-w-90`}>
                    <i className={`ri-safe-3-fill text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-[2px]`}></i>
                    <h3 className={`text-center text-base sm:text-lg text-nowrap font-bold`}>Store sensitive information</h3>
                    <p className='text-xs text-center font-light'>Passwords, Credit Cards, Web Notes and personal information - keep it all secured in one place.</p>
                </div>
                <div className={`flex flex-col gap-1 justify-center items-center ${theme === "dark" ? "bg-v" : "bg-[#004063]"} text-main p-4 rounded-lg flex-1 lg:max-w-90`}>
                    <i className={`ri-global-line text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-[2px]`}></i>
                    <h3 className={`text-center text-base sm:text-lg text-nowrap font-bold`}>Easy access from anywhere</h3>
                    <p className='text-xs text-center font-light'>Access all the stored passwords, keys and sensitive information from anytime, anywhere in the world.</p>
                </div>
                <div className={`flex flex-col gap-1 justify-center items-center ${theme === "dark" ? "bg-v" : "bg-[#004063]"} text-main p-4 rounded-lg flex-1 lg:max-w-90`}>
                    <i className={`ri-customer-service-2-line text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-[2px]`}></i>
                    <h3 className={`text-center text-base sm:text-lg text-nowrap font-bold`}>All-in-one solution</h3>
                    <p className='text-xs text-center font-light'>A trusty app that keeps all your secrets in one safe place, like a vault for your virtual treasures</p>
                </div>
            </div>
            <footer className={`${theme === "dark" ? "text-vv" : "text-main"} text-xs sm:text-base font-play text-center pb-1 sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2`}>
                Developed with {theme === "dark" ? "❤️" : "🤍"} by Ansh Kumar
            </footer>
        </div>
    );
};

export default Home;