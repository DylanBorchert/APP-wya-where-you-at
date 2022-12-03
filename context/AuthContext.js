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
  return async ({email, password, password2, userName, fname, phoneNumber, pushtoken}) => {
    try{

      //check if email is valid with regex
      email = email.trim().toLowerCase()
      //check if all fields are filled
      if (email === "" || password === "" || password2 === "" || userName === "" || fname === "" || phoneNumber === "") {
        alert("Please fill out all fields");
        return;
      }
      if(password !== password2){
        alert("Passwords do not match");
        return;
      }
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!emailRegex.test(email)){
        alert("Please enter a valid email");
        return;
      }
      const response = await fetch("http://35.226.48.108:8080/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            userName: userName,
            name: fname,
            phoneNumber: phoneNumber,
            pushtoken: pushtoken,
          }),
        });
        //update push token
  
        var data = await response.json();

        if(response.status === 200){
          dispatch({type: 'signup', payload: {token: data.token, email: email, pushtoken: pushtoken}});
        }else{
          alert(data.error);  
        }

      console.log("signup");
      console.log(`email: ${email} password: ${password} userName: ${userName} fname: ${fname} phoneNumber: ${phoneNumber} pushtoken: ${pushtoken}`);

    } catch (error) {
      alert("Server Error");
      console.log(error);
    }
    
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
          push_token: pushtoken,
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