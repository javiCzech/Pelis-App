import { useEffect, useReducer } from "react";
import { MainRouter } from "./routers/MainRouter";
import {authReducer} from './auth/authReducer'
import { AuthContext } from "./auth/AuthContext";


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() =>{
    localStorage.setItem('user', JSON.stringify(user));
  },[user])

  return (
        <AuthContext.Provider value= {{user, dispatch}}>

          <MainRouter/>
          
          </AuthContext.Provider>
  );
}

export default App;
