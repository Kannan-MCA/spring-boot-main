import React, { createContext, useReducer } from 'react';

const initialState = { isAuthenticated: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { isAuthenticated: true };
    case 'logout':
      return { isAuthenticated: false };
    default:
      throw new Error();
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState, reducer);
  
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};