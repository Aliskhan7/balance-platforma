export const startLogin = (login, password, history) => {
  return (dispatch) => {
    fetch('http://balance-platform.localhost/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login,
        password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.token) {
          dispatch({ type: 'auth/login/error' });
        } else {
          localStorage.setItem('user', JSON.stringify(json.user));
          localStorage.setItem('token', JSON.stringify(json.token));
          history.push('/user_prof');
          dispatch({
            type: 'auth/login/success',
            payload: json,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: 'auth/login/error',
        });
      });
  };
};

export const startProfile = () => {
  const token = JSON.parse(localStorage.getItem(('token')))

  return (dispatch) => {

    fetch('http://balance-platform.localhost/api/profile', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
          dispatch({
            type: 'profile/success',
            payload: json,
          });
        console.log(json)
        });
    }
};


export const startRating = () => {
  const token = JSON.parse(localStorage.getItem(('token')))
  return (dispatch) => {
    dispatch({type: 'profile/start'})
    fetch('http://balance-platform.localhost/api/rating', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'rating/success',
          payload: json,
        });

      });
  }
};