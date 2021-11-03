import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import axios from 'axios';
import apiUrl from '../constants';

function ApplyLoanComponent() {
  const schema = Yup.object().shape({
    loan_type: Yup.string().required(),
  });
  const {register, handleSubmit, formState: {errors}, watch} = useForm({resolver: yupResolver(schema)});
  const [formSubmitted, setFormSubmitted] = useState({});
  const [applyLoanError, setApplyLoanError] = useState({});
  const loanType = watch("loan_type", "");
  const applyLoanHandler = (data:any) => {
    
    axios.post(apiUrl + 'loan', data).then(function (response:any){
      setFormSubmitted(true);
    }).catch(function (){
      setApplyLoanError(true);
    });

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Apply Loan</div>
              {applyLoanError === true ? <p className="bg-error">Unable to apply loan</p> : ''}
              {formSubmitted === true ?
                <p className="bg-success">Loan applied successfully!!!</p>
                :
                <form className="row g-3" onSubmit={handleSubmit(applyLoanHandler)} noValidate>
                  <div className="col-6">
                    <label className="form-label">Loan Type</label>
                    <select className={"form-control" + (errors.loan_type?.message ? ' is-invalid' : '')}  {...register("loan_type")}>
                      <option value="">Please select</option>
                      <option value="education">Education Loan</option>
                      <option value="personal_home">Personal/home Loan</option>
                    </select>
                    <div className="invalid-feedback">{errors.loan_type?.message}</div>
                  </div>
                  
                  <div className="col-6">
                    <label className="form-label">Loan Amount</label>
                    <input type="text" className={"form-control" + (errors.loan_amount?.message ? ' is-invalid' : '')} {...register("loan_amount")}/>
                    <div className="invalid-feedback">{errors.loan_amount?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Loan Apply Date</label>
                    <input type="text" className={"form-control" + (errors.loan_apply_date?.message ? ' is-invalid' : '')} {...register("loan_apply_date")}/>
                    <div className="invalid-feedback">{errors.loan_apply_date?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Loan Issue Date</label>
                    <input type="text" className={"form-control" + (errors.loan_issue_date?.message ? ' is-invalid' : '')} {...register("loan_issue_date")}/>
                    <div className="invalid-feedback">{errors.loan_issue_date?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Rate Of interest</label>
                    <input type="text" className={"form-control" + (errors.rate_of_interest?.message ? ' is-invalid' : '')} {...register("rate_of_interest")}/>
                    <div className="invalid-feedback">{errors.rate_of_interest?.message}</div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Duration of the loan</label>
                    <input type="text" className={"form-control" + (errors.duration?.message ? ' is-invalid' : '')} {...register("duration")}/>
                    <div className="invalid-feedback">{errors.duration?.message}</div>
                  </div>
                  {loanType === "education" ? 
                    <React.Fragment>
                      <div className="col-6">
                        <label className="form-label">Course Fee</label>
                        <input type="text" className={"form-control" + (errors.course_fee?.message ? ' is-invalid' : '')} {...register("course_fee")}/>
                        <div className="invalid-feedback">{errors.course_fee?.message}</div>
                      </div>
                      <div className="col-6">
                        <label className="form-label">Course</label>
                        <input type="text" className={"form-control" + (errors.course?.message ? ' is-invalid' : '')} {...register("course")}/>
                        <div className="invalid-feedback">{errors.course?.message}</div>
                      </div>
                    </React.Fragment>
                    :
                    ""
                  }
                  {loanType === "personal_home" ? 
                    <React.Fragment>
                      <div className="col-6">
                        <label className="form-label">Annual Income  </label>
                        <input type="text" className={"form-control" + (errors.annual_income?.message ? ' is-invalid' : '')} {...register("annual_income")}/>
                        <div className="invalid-feedback">{errors.annual_income?.message}</div>
                      </div>
                      <div className="col-6">
                        <label className="form-label">Company Name</label>
                        <input type="text" className={"form-control" + (errors.company_name?.message ? ' is-invalid' : '')} {...register("company_name")}/>
                        <div className="invalid-feedback">{errors.company_name?.message}</div>
                      </div>
                    </React.Fragment>
                    :
                    ""
                  }
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Apply</button>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyLoanComponent;