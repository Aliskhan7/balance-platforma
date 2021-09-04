const initialState = {
  links: [],
  loading: false,
}

export default (state = initialState, action) =>{
  switch (action.type){
    case 'links/load/success':
      return{
        ...state,
        links: action.payload
      }

    default:
      return state
  }
}