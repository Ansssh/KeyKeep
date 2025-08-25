import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    const { theme } = useContext(ThemeContext);
    const Navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: '',
        userName: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        userName: '',
        password: '',
    });

    const [isFocused, setIsFocused] = useState({
        name: false,
        userName: false,
        password: false
    })

    const isFloating = {
        name: isFocused.name || credentials.name,
        userName: isFocused.userName || credentials.userName,
        password: isFocused.password || credentials.password
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [step, setStep] = useState(1);

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, userName, password } = credentials;
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_LINK}/signup`, {
            fullName: name,
            user_name: userName,
            pass_word: password
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            console.log("Successfully Signed Up!");
            Navigate('/home');
        }).catch((err) => {
            console.error("Duck You! No Signup for you!", err);
        })
    }

    function renderParts() {
        switch (step) {
            case 1:
                return (
                    <>
                        <form action="" className='border-main flex flex-col w-full'>
                            <span className={`text-2xl mb-4 font-bold ${theme === "dark" ? "text-vv" : "text-main"}`}>Start By Telling us Your name</span>
                            <div className='relative w-full'>
                                <label
                                    htmlFor="fname"
                                    className={`
                                        absolute 
                                        left-4 
                                        pointer-events-none 
                                        transition-all 
                                        duration-200 
                                        ease-in-out
                                        ${isFloating.name
                                            ? `-top-2.5 text-sm px-1 ${theme === "dark" ? "bg-main text-v" : "bg-ii text-i"}`
                                            : `top-2.5 text-xl ${theme === "light" ? "text-main" : "text-vv"}`
                                        }
                                    `}
                                >
                                    Your Name
                                </label>
                                <input
                                    id="fname"
                                    type="text"
                                    value={credentials.name}
                                    className={`w-full h-12 text-xl items-center 1 ${errors.name ? "" : "mb-3"} px-4 py-2 border-2 rounded-lg ${theme === "light" ? "border-main text-main focus:border-i" : "border-vv text-vv focus:border-v"} bg-transparent outline-none box-border`}
                                    onFocus={() => setIsFocused({ ...isFocused, name: true })}
                                    onBlur={() => setIsFocused({ ...isFocused, name: true })}
                                    onChange={(e) => {
                                        setErrors({ ...errors, name: '' });
                                        setCredentials({
                                            ...credentials,
                                            name: e.target.value
                                        })

                                    }
                                    }
                                />
                                {errors.name && <span className="text-red-500 italic block mb-2 mt-1 text-sm">* {errors.name}</span>}
                            </div>
                            <button
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (!credentials.name) {
                                        setErrors({ ...errors, name: 'Name is required' });
                                        return;
                                    }

                                    setStep(2);
                                }}
                                className={`w-full ${theme === "light" ? " bg-i" : "bg-v"} rounded-lg h-12 font-bold text-lg text-main cursor-pointer active:scale-95 transition-all duration-200 ease-in-out flex items-center justify-center`}>
                                Next
                            </button>
                        </form>
                    </>
                )
            case 2:
                return (
                    <>
                        <form action="" className='border-main flex flex-col w-full'>
                            <span className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-vv" : "text-main"}`}>Hello {credentials.name.split(" ")[0]}!</span>
                            <div className='relative w-full mb-4'>
                                <label
                                    htmlFor="username"
                                    className={`
                                        absolute 
                                        left-4 
                                        pointer-events-none 
                                        transition-all 
                                        duration-200 
                                        ease-in-out
                                        ${isFloating.userName
                                            ? `-top-2.5 text-sm px-1 ${theme === "dark" ? "bg-main text-v" : "bg-ii text-i"}`
                                            : `top-2.5 text-xl ${theme === "light" ? "text-main" : "text-vv"}`
                                        }
                                    `}
                                >
                                    User Name
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    value={credentials.userName}
                                    className={`w-full h-12 text-xl items-center px-4 py-2 border-2 rounded-lg ${theme === "light" ? "border-main text-main focus:border-i" : "border-vv text-vv focus:border-v"} bg-transparent outline-none box-border`}
                                    onFocus={() => setIsFocused({ ...isFocused, userName: true })}
                                    onBlur={() => setIsFocused({ ...isFocused, userName: true })}
                                    onChange={(e) => setCredentials({
                                        ...credentials,
                                        userName: e.target.value
                                    })}
                                />
                                {errors.userName && <span className="text-red-500 italic block mb-2 mt-1 text-sm">* {errors.userName}</span>}
                            </div>
                            <div className='relative w-full mb-2'>
                                <label
                                    htmlFor="password"
                                    className={`
                                        absolute 
                                        left-4 
                                        pointer-events-none 
                                        transition-all 
                                        duration-200 
                                        ease-in-out
                                        ${isFloating.password
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
                                    value={credentials.password}
                                    className={`w-full h-12 text-xl items-center px-4 py-2 border-2 rounded-lg ${theme === "light" ? "border-main text-main focus:border-i" : "border-vv text-vv focus:border-v"} bg-transparent outline-none box-border`}
                                    onFocus={() => setIsFocused({ ...isFocused, password: true })}
                                    onBlur={() => setIsFocused({ ...isFocused, password: true })}
                                    onChange={(e) => setCredentials({
                                        ...credentials,
                                        password: e.target.value
                                    })}
                                />
                                <div className={`absolute top-0 translate-y-1/2 right-2 smxx ${isFloating.password && credentials.password
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-0 pointer-events-none"
                                    } cursor-pointer`} onClick={() => { setIsPasswordVisible(!isPasswordVisible) }}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={theme === "dark" ? "#C1121F" : "#FDF0D5"} className='w-6 h-6'>
                                        <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M22 2 L2 22"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            className={`${isPasswordVisible ? "slashii" : "slash"}`}
                                        />
                                    </svg>
                                </div>

                                {errors.password.length > 0 ? <span className="text-red-500 italic block mb-2 mt-1 text-sm">* {errors.password}</span> : <span className={`italic text-sm ${theme === "dark" ? "text-vv" : "text-main"}`}> Pro Tip - Dont Forget these!</span>}
                            </div>

                            <button
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                                className={`w-full ${theme === "light" ? " bg-i" : "bg-v"} rounded-lg h-12 font-bold text-lg text-main cursor-pointer active:scale-95 transition-all duration-200 ease-in-out flex items-center justify-center`}>
                                Sign Up!
                            </button>

                        </form>
                    </>
                )


        }
    }
    return (
        <motion.div
            key="signup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col self-center w-full sm:w-100'
        >
            {renderParts()}
        </motion.div>
    )
}

export default Signup