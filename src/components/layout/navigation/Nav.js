import React from 'react'
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav id={styles['nav-container']}>
            <ul id={styles['nav-links-list']}>
                <li>Home</li>
                <li>About</li>
                <li>Charts</li>
                <li>Open Source</li>
                <li>Contributors</li>
            </ul>

            <React.Fragment>Log In</React.Fragment>
        </nav>
    )
}
