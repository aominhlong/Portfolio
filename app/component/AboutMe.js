import React from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <div className={styles.container}>
            <h1>About Me</h1>
            <div className={styles.paragraphContainer}>
                <p>Enthusiastic and self-driven developer with a passion for creating innovative software that delivers seamless user experience in collaborative and mentorship-driven environments. Eager to continue to learn and create scalable, maintainable, and testable software from conception to completion.</p>
            </div>
        </div>
    )
}

export default AboutMe
