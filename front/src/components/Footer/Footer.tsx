import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
          <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9999 5.31671L25.3333 12.8167V25.8334H21.9999V15.8334H11.9999V25.8334H8.66659V12.8167L16.9999 5.31671ZM16.9999 0.833374L0.333252 15.8334H5.33325V29.1667H15.3333V19.1667H18.6666V29.1667H28.6666V15.8334H33.6666L16.9999 0.833374Z" fill="white"/>
            </svg>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2584 18.7584H19.9417L19.475 18.3084C21.1084 16.4084 22.0917 13.9417 22.0917 11.2584C22.0917 5.27505 17.2417 0.425049 11.2584 0.425049C5.27505 0.425049 0.425049 5.27505 0.425049 11.2584C0.425049 17.2417 5.27505 22.0917 11.2584 22.0917C13.9417 22.0917 16.4084 21.1084 18.3084 19.475L18.7584 19.9417V21.2584L27.0917 29.5751L29.5751 27.0917L21.2584 18.7584ZM11.2584 18.7584C7.10838 18.7584 3.75838 15.4084 3.75838 11.2584C3.75838 7.10838 7.10838 3.75838 11.2584 3.75838C15.4084 3.75838 18.7584 7.10838 18.7584 11.2584C18.7584 15.4084 15.4084 18.7584 11.2584 18.7584Z" fill="white"/>
            </svg>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9999 31.2917L14.5833 29.0917C5.99992 21.3084 0.333252 16.175 0.333252 9.87504C0.333252 4.74171 4.36659 0.708374 9.49992 0.708374C12.3999 0.708374 15.1833 2.05837 16.9999 4.19171C18.8166 2.05837 21.5999 0.708374 24.4999 0.708374C29.6333 0.708374 33.6666 4.74171 33.6666 9.87504C33.6666 16.175 27.9999 21.3084 19.4166 29.1084L16.9999 31.2917Z" fill="white"/>
                </svg>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9999 0.333374C7.79992 0.333374 0.333252 7.80004 0.333252 17C0.333252 26.2 7.79992 33.6667 16.9999 33.6667C26.1999 33.6667 33.6666 26.2 33.6666 17C33.6666 7.80004 26.1999 0.333374 16.9999 0.333374ZM9.24992 27.8334C11.4333 26.2667 14.0999 25.3334 16.9999 25.3334C19.8999 25.3334 22.5666 26.2667 24.7499 27.8334C22.5666 29.4 19.8999 30.3334 16.9999 30.3334C14.0999 30.3334 11.4333 29.4 9.24992 27.8334ZM27.2333 25.5334C24.4166 23.3334 20.8666 22 16.9999 22C13.1333 22 9.58325 23.3334 6.76659 25.5334C4.83325 23.2167 3.66659 20.25 3.66659 17C3.66659 9.63337 9.63325 3.66671 16.9999 3.66671C24.3666 3.66671 30.3333 9.63337 30.3333 17C30.3333 20.25 29.1666 23.2167 27.2333 25.5334Z" fill="white"/>
            <path d="M16.9999 7.00004C13.7833 7.00004 11.1666 9.61671 11.1666 12.8334C11.1666 16.05 13.7833 18.6667 16.9999 18.6667C20.2166 18.6667 22.8333 16.05 22.8333 12.8334C22.8333 9.61671 20.2166 7.00004 16.9999 7.00004ZM16.9999 15.3334C15.6166 15.3334 14.4999 14.2167 14.4999 12.8334C14.4999 11.45 15.6166 10.3334 16.9999 10.3334C18.3833 10.3334 19.4999 11.45 19.4999 12.8334C19.4999 14.2167 18.3833 15.3334 16.9999 15.3334Z" fill="white"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;