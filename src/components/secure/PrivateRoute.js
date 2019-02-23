import React from 'react';
import authService from './../../services/authService';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ( { component: Component, ...rest } ) => (
    <Route {...rest}
        render={( props ) => (
            authService.isAuthenticated()
                ? <Component {...props} />
                : <Redirect to={
                    {
                        pathname: '/login',
                        state: { target: props.location }
                    }
                } />
        )}
    />
);

export default PrivateRoute;