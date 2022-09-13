import React, { useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }
    return (
    <>
    <header className={styles.menu}>
        <div className={styles.logo}>Team Awesome</div>
        <nav className={styles.navbar}>
        <div className={styles.menu__list}>
          <button className={styles.menu__elements}>Timesheets</button>
          <button className={styles.menu__elements}>Timesheets</button>
          <button className={styles.menu__elements}>Timesheets</button>
          <button className={styles.menu__elements}>Timesheets</button>
          <button className={styles.menu__elements}>Timesheets</button>
        </div>
        </nav>
        <button className={styles.hamburger} onClick={toggleMenu}>Toggle menu</button>
    </header>
    </>
    );
}
