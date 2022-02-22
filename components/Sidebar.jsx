import styles from '../styles/Sidebar.module.css';
import Image from 'next/image';
import PLink from './PLink';

function Sidebar() {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <div className={styles.img}>
          <PLink to={'/reader'}>
            <Image
              src={'/home.png'}
              alt={'icons'}
              height={30}
              width={30}
              className={styles.icons}
            />
          </PLink>
        </div>
        <div className={styles.img}>
          <PLink to={'/reader/explore'}>
            <Image
              src={'/plus.png'}
              alt={'icons'}
              height={30}
              width={30}
              className={styles.icons}
            />
          </PLink>
        </div>
      </div>
    </div>
    );
}

export default Sidebar;
