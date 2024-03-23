import { useState, createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [logged, setLogged] = useState(false)

    const handleModalLogin = () => {
        setLogin(true)
    }

    const handleModalRegister = () => {
        setRegister(true)
    }

    const handleModalClose = () => {
        setLogin(false)
        setRegister(false)
    }

    return (
        <authContext.Provider
            value={{
                login,
                setLogin,
                setRegister,
                register,
                logged,
                setLogged,
                handleModalLogin,
                handleModalRegister,
                handleModalClose
            }}
        >
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider