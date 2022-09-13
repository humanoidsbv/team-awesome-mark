import styles from './Header.module.css';

export const Header = () => {
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
    </header>
    </>
    );
}
