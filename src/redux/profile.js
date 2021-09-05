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

    default:
      return state;
  }
};