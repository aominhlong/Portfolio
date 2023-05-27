"use client";
import React, {useState} from 'react';
import styles from './NavBar.module.css';
import NavBarLinks from './NavBarLinks';
import Hamburger from 'hamburger-react';
import NextLink from 'next/link';

function NavBar () {
    let navSections = ['Home', 'About', 'Resume', 'Projects', 'Blog', 'Contact']
    
    const [isOpen, setOpen] = useState(false)
    const [display, setDisplay] = useState('none')

    return (
        <nav>
            <div className={styles.container}>
                <img className={styles.logo} src='./Logo.png'></img>
                { navSections.map(linkTitle => {
                    return <NavBarLinks name={linkTitle} key={navSections.indexOf(linkTitle)}className={styles.navLinks}></NavBarLinks>
                })}
            </div>
            <div className={styles.hamburger}>
                <img className={styles.logo} src='./Logo.png'></img>
                <h1 className={styles.name}>Nicholas Ao</h1>
                <Hamburger
                    toggled={isOpen} 
                    toggle={() => {
                        display == 'none' ? setDisplay('flex') : setDisplay('none')
                        setOpen
                    }}
                ></Hamburger>
            </div>
            <div className={styles.hamburgerMenu} style={{display: `${display}`}}>
                { navSections.map(linkTitle => {
                    return <NavBarLinks name={linkTitle} key={navSections.indexOf(linkTitle)}className={styles.navLinks}></NavBarLinks>
                })}
            </div>
        </nav>
    )
}

export default NavBar
