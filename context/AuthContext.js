import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
        pushtoken: action.payload.pushtoken,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    console.log('Signup');
  };
};

const signin = dispatch => {
  return async ({email, password, pushtoken}) => {

    // Do some API Request here
    try {
      const response = await fetch("http://35.226.48.108:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      //update push token

      var data = await response.json();
      if (data[0]?.status === "success") { //if login is successful
        dispatch({
          type: 'signin', 
          payload: {
            token: 'some access token here', 
            email,
            pushtoken,
          }
        });
      } else {
        alert("Incorrect email or password");
      }
    } catch (error) {
      alert("Server Error");
      console.log(error);
    }
  };
};

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, email: '', pushtoken: null},
);