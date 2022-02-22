import styles from '../styles/Nav.module.css';
import Image from 'next/image';

function Nav() {
  return (
    <nav className={styles.root}>
        <div className={styles.logo}>
          <Image
            src={'/pajer.png'}
            alt={'pajer-logo'}
            height={38}
            width={149}
          />
        </div>
        <h6 style={{margin: 10,}}>User</h6>
    </nav>
    );
}

export default Nav;
