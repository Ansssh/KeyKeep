import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div className='w-full p-5 bg-ii'>
            <header className='flex items-center justify-between'>
                <h1 className={`text-xl sm:text-2xl md:text-3xl font-play text-main`}>KeyKeep</h1>
                <div className='flex gap-2'>
                    <button className='mt-1 px-4 py-2 rounded-full
                                       text-xs sm:text-md lg:text-lg font-bold
                                       bg-main text-ii
                                       cursor-pointer'>
                        Login
                    </button>
                    <button className='mt-1 px-4 py-2 rounded-full
                                       text-xs sm:text-md lg:text-lg font-bold
                                       bg-transparent text-main
                                       cursor-pointer
                                       hidden sm:block'>
                        Sign Up
                    </button>
                </div>
            </header>

        </div>
    );
};

export default Home;