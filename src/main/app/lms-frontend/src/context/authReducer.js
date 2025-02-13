export const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user, 
          token: action.payload.token, 
          role: action.payload.user.roles
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null, 
          role: null
        };
      default:
        return state;
    }
  };
  