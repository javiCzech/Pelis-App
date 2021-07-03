import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './login.css';

export const LoginScreen = ({ history }) => {

  const [inputvalue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setInputValue(e.target.value)

  }

  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: inputvalue
      }
    });

    history.replace(lastPath);

  }
  return (
    <div id="login-background-image">
      <div className="container" id="login1">
        <div className="d-flex justify-content-center h-100">
          <div className="card" id="card_login">
            <div className="card-header">
              <h3>PelisPedia</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square"></i></span>
                <span><i className="fab fa-google-plus-square"></i></span>
                <span><i className="fab fa-twitter-square"></i></span>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control"
                    placeholder="username"
                    id="input1"
                    onChange={handleInputChange}
                    value={inputvalue} autoComplete="off" />

                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" id="input2" className="form-control" placeholder="password" />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
                </div>
                <div className="form-group text-end">
                  <button type="submit" className="btn btn-primary login_btn" onClick={handleLogin}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
