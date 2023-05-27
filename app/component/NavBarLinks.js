import React from 'react';
import styles from './NavBarLinks.module.css';

function NavBarLinks({ name }) {
    return (
        <div>
            <a href={ `/${name.toLowerCase()}` }>{ name }</a>
        </div>
    )
}

export default NavBarLinks

