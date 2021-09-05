const initialState = {
  items: [],
  loading: false
};

export const rating = (state = initialState, action) => {
  switch (action.type) {
    case 'rating/success':
      return {
        ...state,
        items: action.payload,
        loading: true
      };
    case 'rating/start':
      return{
        ...state,
        loading: false
      }

    default:
      return state;
  }
};