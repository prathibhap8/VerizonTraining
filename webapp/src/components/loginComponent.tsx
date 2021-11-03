import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import axios from 'axios';
import apiUrl from '../constants';
import PropTypes from 'prop-types';
type Props = React.PropsWithChildren<{}>;

function LoginComponent( { setToken }: any ) {
  const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required()
  });
  const history = useHistory();
  
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
  const [loginError, setLoginError] = useState({});
  const loginHandler = (data:any) => {
    
    axios.post(apiUrl + 'login', data).then(function (response:any){
      setToken(response);
      history.push('/')
    }).catch(function (){
      setLoginError(true);
    });
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form className="row g-3" onSubmit={handleSubmit(loginHandler)} noValidate>
              {loginError === true ? <p className="bg-error">Invalid email or password</p> : ''}
                <div className="col-12">
                  <label className="form-label">Username</label>
                  <input type="text" className={"form-control" + (errors.email?.message ? ' is-invalid' : '')} {...register("email")}/>
                  <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="col-12">
                  <label className="form-label">Password</label>
                  <input type="password" className={"form-control" + (errors.password?.message ? ' is-invalid' : '')} {...register("password")}/>
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="col-6">
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                <div className="col-6">
                <NavLink  to="/Registration">Registration</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
LoginComponent.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default LoginComponent;