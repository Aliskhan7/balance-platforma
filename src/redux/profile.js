const initialState = {
  items: [],
  loading: false
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'profile/success':
      return {
        ...state,
        items: action.payload,
        loading: true
      };
    case 'profile/start':
      return{
        ...state,
        loading: false
      }

    default:
      return state;
  }
};