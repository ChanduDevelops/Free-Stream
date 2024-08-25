import { createContext, useState } from 'react'
import PropTypes from 'prop-types'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(true)

    return (
        <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}


export { AuthContext, AuthProvider }