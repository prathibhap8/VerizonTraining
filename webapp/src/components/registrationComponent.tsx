import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import axios from 'axios';
import apiUrl from '../constants';

function RegistrationComponent() {
  const schema = Yup.object().shape({
    name: Yup.string().required().matches(/[a-zA-Z\w]/),
    username: Yup.string().required(),
    password: Yup.string().required(),
    guardian_name: Yup.string().required(),
    guardian_type: Yup.string().required(),
    address: Yup.string().required(),
    citizenship: Yup.string().required(),
    state: Yup.string().required(),
    country: Yup.string().required(),
    email: Yup.string().required().email(),
    gender: Yup.string().required(),
    marital_status: Yup.string().required(),
    contact_no: Yup.string().required().min(10),
    date_of_birth: Yup.string().required(),
    branch_name: Yup.string().required(),
    initial_deposit_amount: Yup.string().required().matches(/[0-9,.]/),
    id_proof_type: Yup.string().required(),
    id_doc_no: Yup.string().required(),
    ref_acc_holder_name: Yup.string().required().matches(/[a-zA-Z\s]/),
    ref_acc_no: Yup.string().required(),
    ref_acc_address: Yup.string().required()
  });
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
  const [formSubmitted, setFormSubmitted] = useState({});
  const [formError, setFormError] = useState({});
  const submitHandler = (data:any) => {
    axios.post(apiUrl + 'register', data).then(function (data) {
      setFormSubmitted(true);
      setFormError(false);
    }).catch(function () {
      setFormError(true);
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Registration</div>
              {formError === true ? <p className="bg-error">Unable to register</p> : ''}
              {formSubmitted === true ?
                <p className="bg-success">Registered successfully!!!</p>
                :
                <form className="row g-3" onSubmit={handleSubmit(submitHandler)} noValidate>
                  <div className="col-6">
                    <label className="form-label">Name</label>
                    <input type="text" className={"form-control" + (errors.name?.message ? ' is-invalid' : '')}  {...register("name")}/>
                    <div className="invalid-feedback">{errors.name?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Username</label>
                    <input type="text" className={"form-control" + (errors.username?.message ? ' is-invalid' : '')} {...register("username")}/>
                    <div className="invalid-feedback">{errors.username?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Password</label>
                    <input type="password" className={"form-control" + (errors.password?.message ? ' is-invalid' : '')} {...register("password")}/>
                    <div className="invalid-feedback">{errors.password?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Guardian Name</label>
                    <input type="text" className={"form-control" + (errors.guardian_name?.message ? ' is-invalid' : '')} {...register("guardian_name")}/>
                    <div className="invalid-feedback">{errors.guardian_name?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Guardian Type</label>
                    <input type="text" className={"form-control" + (errors.guardian_type?.message ? ' is-invalid' : '')} {...register("guardian_type")}/>
                    <div className="invalid-feedback">{errors.guardian_type?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Address</label>
                    <input type="text" className={"form-control" + (errors.address?.message ? ' is-invalid' : '')} {...register("address")}/>
                    <div className="invalid-feedback">{errors.address?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Citizenship</label>
                    <input type="text" className={"form-control" + (errors.citizenship?.message ? ' is-invalid' : '')} {...register("citizenship")}/>
                    <div className="invalid-feedback">{errors.citizenship?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Country</label>
                    <input type="text" className={"form-control" + (errors.country?.message ? ' is-invalid' : '')} {...register("country")}/>
                    <div className="invalid-feedback">{errors.country?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">State</label>
                    <input type="text" className={"form-control" + (errors.state?.message ? ' is-invalid' : '')} {...register("state")}/>
                    <div className="invalid-feedback">{errors.state?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Email Address</label>
                    <input type="text" className={"form-control" + (errors.email?.message ? ' is-invalid' : '')} {...register("email")}/>
                    <div className="invalid-feedback">{errors.email?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Gender</label>
                    <input type="text" className={"form-control" + (errors.gender?.message ? ' is-invalid' : '')} {...register("gender")}/>
                    <div className="invalid-feedback">{errors.gender?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Marital Status</label>
                    <input type="text" className={"form-control" + (errors.marital_status?.message ? ' is-invalid' : '')} {...register("marital_status")}/>
                    <div className="invalid-feedback">{errors.marital_status?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Contact no</label>
                    <input type="text" className={"form-control" + (errors.contact_no?.message ? ' is-invalid' : '')} {...register("contact_no")}/>
                    <div className="invalid-feedback">{errors.contact_no?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Date of Birth</label>
                    <input type="text" className={"form-control" + (errors.date_of_birth?.message ? ' is-invalid' : '')} {...register("date_of_birth")}/>
                    <div className="invalid-feedback">{errors.date_of_birth?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Branch Name</label>
                    <input type="text" className={"form-control" + (errors.branch_name?.message ? ' is-invalid' : '')} {...register("branch_name")}/>
                    <div className="invalid-feedback">{errors.branch_name?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Initial Deposit Amount</label>
                    <input type="text" className={"form-control" + (errors.initial_deposit_amount?.message ? ' is-invalid' : '')} {...register("initial_deposit_amount")}/>
                    <div className="invalid-feedback">{errors.initial_deposit_amount?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Identification Proof Type</label>
                    <input type="text" className={"form-control" + (errors.id_proof_type?.message ? ' is-invalid' : '')} {...register("id_proof_type")}/>
                    <div className="invalid-feedback">{errors.id_proof_type?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Identification Document No.</label>
                    <input type="text" className={"form-control" + (errors.id_doc_no?.message ? ' is-invalid' : '')} {...register("id_doc_no")}/>
                    <div className="invalid-feedback">{errors.id_doc_no?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Reference account holder name</label>
                    <input type="text" className={"form-control" + (errors.ref_acc_holder_name?.message ? ' is-invalid' : '')} {...register("ref_acc_holder_name")}/>
                    <div className="invalid-feedback">{errors.ref_acc_holder_name?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Reference account holder acc. No.</label>
                    <input type="text" className={"form-control" + (errors.ref_acc_no?.message ? ' is-invalid' : '')} {...register("ref_acc_no")}/>
                    <div className="invalid-feedback">{errors.ref_acc_no?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Reference account holder address</label>
                    <input type="text" className={"form-control" + (errors.ref_acc_address?.message ? ' is-invalid' : '')} {...register("ref_acc_address")}/>
                    <div className="invalid-feedback">{errors.ref_acc_address?.message}</div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </form>
              }
              <NavLink  to="/Login">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationComponent;