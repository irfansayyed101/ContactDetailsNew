const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const LOGOUT_SESSION = 'LOGOUT_SESSION';
const EMAIL = 'admin@amd.com';
const PASSWORD = 'admin';

const initialState = {
    isLoginSuccess: false,
    loginError : false,
    errorMessage : '',
    isLoginPending: true,
    userType : 'normal'
}

const reducer = (state = initialState, action) => {
    if(action.type === SET_LOGIN_PENDING){
        if (action.payload.email === EMAIL && action.payload.password === PASSWORD) {
            return {
                ...state,
                isLoginSuccess: true,
                loginError: false,
                errorMessage : '',
                isLoginPending : false,
                userType : 'admin'
              };
          } else {
            return {
                ...state,
                isLoginSuccess: false,
                isError: true,
                errorMessage : 'Invalid email and password',
                isLoginPending : true,
                userType : 'normal'
              }
          }
    }

    if(action.type === LOGOUT_SESSION){
        return {
            ...state,
            isLoginSuccess: false,
            loginError: false,
            errorMessage : '',
            isLoginPending : false,
            userType : 'notmal'
          };
    }
    return state;
};

export default reducer;