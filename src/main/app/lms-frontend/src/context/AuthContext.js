import React, { createContext, useReducer, useContext } from 'react';
import { authReducer, initialState } from './authReducer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:8090/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(credentials), });
      if (!response.ok) { throw new Error('Login failed'); } const userData = await response.json();
      dispatch({ type: 'LOGIN', payload: userData });
    } catch (error) { console.error('Login error:', error); }
  };
  const logout = () => { dispatch({ type: 'LOGOUT' }); };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);