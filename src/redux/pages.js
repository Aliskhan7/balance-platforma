const initialState = {
  pages: [],
  loadings: false
}

export default (state = initialState, action) =>{
  switch (action.type){
    case 'pages/load/success':
      return{
        ...state,
        pages: action.payload,
      }

    default:
      return state
  }
}