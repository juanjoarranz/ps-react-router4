import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Sidebar = () => {

    const links = [
        { name: 'Color', url: '/color' },
        { name: 'Logging', url: '/logging' },
        { name: 'People', url: '/people' },
        { name: 'Prompt', url: '/prompt' },
        { name: 'Private', url: '/private' },
        { name: 'Prop Viewer', url: '/props' },
        { name: 'Smart Color', url: '/color/Green/00ff00' },
        { name: 'Recursion', url: '/color/Top Parent/ffff00' },
        { name: 'Transitions', url: '/transitions' },
        { name: '404 Error', url: '/404Error' },
    ];

    let linksComponents = links.map( ( link, index ) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'}
                    to={link.url} exact>{link.name}</NavLink>
            </li>
        );
    } );

    return (
        <div className={'leftNavContainer'}>
            <ul>
                <li className='nav'><NavLink className={'navLink'} activeClassName={'activeNavLink'} to='/' exact>Home</NavLink></li>
                {linksComponents}
            </ul>
            <Link to='/pets'>
                <Image src='/assets/unicorn.png' width={100} />
            </Link>
        </div>
    );
};

export default Sidebar;