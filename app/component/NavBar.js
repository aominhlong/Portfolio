import React from 'react';
import styles from './NavBar.module.css';
import NavBarLinks from './NavBarLinks';

function NavBar () {
    let navSections = ['Home', 'About', 'Resume', 'Projects', 'Blog', 'Contact']
    return (
        <div className={styles.container}>
            <img src='./Logo.png'></img>
            { navSections.map(linkTitle => {
                return <NavBarLinks name={linkTitle}></NavBarLinks>
            })}
        </div>
    )
}

export default NavBar
