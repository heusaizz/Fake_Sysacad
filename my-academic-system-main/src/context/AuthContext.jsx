import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);
    const [token, setToken] = useState('');

    const login = (userData, token) => {
        setUser (userData);
        setToken(token);
    };

    const logout = () => {
        setUser (null);
        setToken('');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // Agregar validación para children
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};