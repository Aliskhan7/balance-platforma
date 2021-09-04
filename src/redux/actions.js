export const loadLinks = (payload) => {
  return dispatch => {
    dispatch({
      type: 'links/load/success',
      payload
    })
  }
}

export const loadPages = (payload) =>{
  return dispatch =>{
    dispatch({
      type: 'pages/load/success',
      payload,
    })
  }
}

