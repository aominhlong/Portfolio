import React from 'react';
import styles from './Greetings.module.css';

function Greetings() {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <div className={styles.textContainer}>
                    <p>Hello I'm, </p>
                    <p>Nicholas Ao</p>
                    <p>Software Developer</p>
                </div>
                <div className={styles.buttonCont}>
                    <button>Contact Me</button>
                    <button>Resume</button>
                </div>
            </section>
            <img src='./Profile.png'></img>
        </div>
    )
}

export default Greetings
