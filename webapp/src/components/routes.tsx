import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './homeComponent';
import UpdateAccount from './updateAccountComponent';
import ApplyLoan from './applyLoanComponent';
import Login from './loginComponent';
import Registration from './registrationComponent';

function setToken(response:any) {
    const userToken = response?.data?.accessToken;
    const userId = response?.data?.user?.id;
    sessionStorage.setItem('access_token', JSON.stringify(userToken));
    sessionStorage.setItem('userId', JSON.stringify(userId));
}
  
export function getToken() {
    return sessionStorage.getItem("access_token")
}
export function getUserId() {
    return sessionStorage.getItem("userId")
} 
const Routes = () => {
    const token = getToken();
    if (!token) {
         return (
            <React.Fragment>
                <Switch>
                    <Route path="/Registration" exact={true}>
                        <Registration/>
                    </Route>
                    <Route path="*">
                        <Login setToken={setToken} />
                    </Route>
                </Switch>
            </React.Fragment>
         )
    }
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/UpdateAccount" exact={true}>
                    <UpdateAccount/>
                </Route>
                <Route path="/ApplyLoan" exact={true}>
                    <ApplyLoan/>
                </Route>
                <Route path="/logout">
                    <Login setToken={() => setToken(null)} />
                </Route>
            </Switch>
        </React.Fragment>
        
    )
}

export default Routes;