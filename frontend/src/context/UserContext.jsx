import { createContext, useState } from "react";

export const UserContext = createContext({
    user: "",
    login: () => {},
    logout: () => {},
})


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    }
    const logout = () => {
        setUser(null);
    }

    const contextValue = {
        user,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};