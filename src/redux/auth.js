const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  auth: false,
  error: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/login/success':
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case 'auth/login/error':
      return {
        ...state,
        error: true,
        auth: false,
      };
    case 'auth/reset':
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};