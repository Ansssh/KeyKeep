import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion'; // CHANGE: Imported motion

const Login = () => {
    const { theme } = useContext(ThemeContext);
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('')
    const isLabelFloating = isNameFocused || nameValue;
    const isPasswordFloating = isPasswordFocused || passwordValue;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        // CHANGE: Wrapped the main div with motion.div for animations
        <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col self-center w-full sm:w-100'
        >
            <form action="" className='border-main flex flex-col gap-4 w-full'>
                <div className='relative mt-4 w-full'>
                    <label
                        htmlFor="fname"
                        className={`
                        absolute 
                        left-4 
                        pointer-events-none 
                        transition-all 
                        duration-200 
                        ease-in-out
                        ${isLabelFloating
                                ? `-top-2.5 text-sm px-1 ${theme === "dark" ? "bg-main text-v" : "bg-ii text-i"}`
                                : `top-2.5 text-xl ${theme === "light" ? "text-main" : "text-vv"}`
                            }
                    `}
                    >
                        Username
                    </label>
                    <input
                        id="fname"
                        type="text"
                        value={nameValue}
                        className={`w-full h-12 text-xl items-center px-4 py-2 border-2 rounded-lg ${theme === "light" ? "border-main text-main focus:border-i" : "border-vv text-vv focus:border-v"} bg-transparent outline-none box-border`}
                        onFocus={() => setIsNameFocused(true)}
                        onBlur={() => setIsNameFocused(false)}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                </div>
                <div className='relative w-full'>
                    <label
                        htmlFor="password"
                        className={`
                        absolute 
                        left-4 
                        pointer-events-none 
                        transition-all 
                        duration-200 
                        ease-in-out
                        ${isPasswordFloating
                                ? `-top-2.5 text-sm px-1 ${theme === "dark" ? "bg-main text-v" : "bg-ii text-i"}`
                                : `top-2.5 text-xl ${theme === "light" ? "text-main" : "text-vv"}`
                            }
                    `}
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type={isPasswordVisible ? "text" : "password"}
                        value={passwordValue}
                        className={`w-full h-12 text-xl items-center px-4 py-2 border-2 rounded-lg ${theme === "light" ? "border-main text-main focus:border-i" : "border-vv text-vv focus:border-v"} bg-transparent outline-none box-border`}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                    <div className={`absolute right-2 top-1/2 -translate-y-1/2 smxx ${isPasswordFloating && passwordValue
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 pointer-events-none"
                        } cursor-pointer`} onClick={() => { setIsPasswordVisible(!isPasswordVisible) }}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={theme === "dark" ? "#C1121F" : "#FDF0D5"} className='w-6 h-6'>
                            <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M22 2 L2 22"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                className={`${isPasswordVisible ? "slashii" : "slash"}`}
                            />
                        </svg>
                    </div>
                </div>

                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    className={`w-full ${theme === "light" ? " bg-i" : "bg-v"} rounded-lg h-12 font-bold text-lg text-main cursor-pointer active:scale-95 transition-all duration-200 ease-in-out flex items-center justify-center`}>
                    Login
                </button>

            </form>


            <div className='relative flex items-center gap-2 mt-2'>
                <hr className={`flex-1 h-[2px] border-none ${theme === "dark" ? "bg-v" : "bg-main"}`} />
                <span className={`text-xl pb-2 font-bold ${theme === "light" ? "text-main" : "text-vv"}`}>
                    or</span>
                <hr className={`flex-1 h-[2px] border-none ${theme === "dark" ? "bg-v" : "bg-main"}`} />
            </div>
            <div className={`font-bold text-xl text-center ${theme === "light" ? "text-main" : "text-vv"} flex flex-col gap-2`}>
                <h4 className=''>Sign in Using</h4>
                <div className='flex items-center justify-center gap-3'>
                    <i className="text-3xl ri-google-fill"></i>
                    <i className="text-3xl ri-apple-fill"></i>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;