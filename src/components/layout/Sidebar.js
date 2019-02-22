import React from "react";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <NavLink to='/' activeClassName='activeNavLink' className='navLink' exact>Home</NavLink><br/>
            <NavLink to='/prompt' activeClassName='activeNavLink' className='navLink'>Prompt</NavLink><br/>
            <NavLink to='/props' activeClassName='activeNavLink' className='navLink'>Props</NavLink><br/>
            <NavLink to='/foo' activeClassName='activeNavLink' className='navLink'>Not Found</NavLink><br/>
        </div>
    );
};

export default Sidebar; 