import styles from './Header.module.scss';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';

const Button = () => {
  return <button className={styles.button}>Click Me</button>;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggler = () => setMenuOpen((prev) => !prev);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Navbar</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles['nav--open'] : {}}`}
          >
            <a href="/" className={styles.nav__item}>
              Home
            </a>
            <a href="/" className={styles.nav__item}>
              About
            </a>
            <a href="/" className={styles.nav__item}>
              Contact
            </a>
            <div className={styles.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
