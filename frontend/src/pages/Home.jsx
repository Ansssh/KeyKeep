import React from 'react';

const Home = () => {
    return (
        <div className='w-full p-5 bg-gray-800'>
            <header className='flex items-center justify-between'>
                <h1 className={`text-xl sm:text-2xl md:text-3xl font-play text-main`}>KeyKeep</h1>
                <div className='flex gap-2'>
                    <button className='mt-1 px-4 py-2 rounded-4xl
                                       text-xs sm:text-md lg:text-lg font-bold
                                       bg-main text-ii
                                       cursor-pointer'>
                        Login
                    </button>
                    <button className='mt-1 px-4 py-2 rounded-4xl
                                       text-xs sm:text-md lg:text-lg font-bold
                                       bg-transparent text-main
                                       cursor-pointer
                                       hidden sm:block'>
                        Sign Up
                    </button>
                </div>
            </header>
            <h2 className='pt-5 sm:pt-10 md:pt-15 lg:pt-20 px-0 sm:px-10 md:px-20 lg:px-30
                           text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center
                           bg-gradient-to-r from-main to-[#F0C987] bg-clip-text text-transparent'>
                Say Goodbye to the stress of forgotten <span className='font-shadows'>Passwords</span> and fear of data breaches
            </h2>
            <p className='text-xs md:text-md lg:text-lg py-2 sm:py-5 px-5 sm:px-15 md:px-30 text-white text-center'>
                Our Password manager is designed to keep your digital life safe and secure, while simplifying the process of password management
            </p>
            
        </div>
    );
};

export default Home;