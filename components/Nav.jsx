import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import { useGetUserDataQuery } from '../lib/apiSlice'
import { useRouter } from 'next/router';

function Nav() {
  const router = useRouter();
  const { data } = useGetUserDataQuery()
  console.log(data)

  const handleClick = () => {
    localStorage.clear();
    router.push('/login')
  }

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
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <h5>Welcome, &nbsp; <b>{data ? data.username : 'User'}</b></h5>
          </div>
          <div className={styles.menuItem}>
            <button
              onClick={() => {handleClick(); }} 
              className={styles.logout}
            >
              Logout
            </button>
          </div>
        </div>
    </nav>
    );
}

export default Nav;
