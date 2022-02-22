import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Userpage from './Userpage';
import { useGetMyPageQuery } from '../lib/apiSlice';

function Layout({ children }) {
  const { data, error } = useGetMyPageQuery();

  const renderPage = () => {
    if (data) {
      return <Userpage folders={data} />
    } else if (error) {
      return <div>ERROR!!</div>
    } else {return <div>LOADING!!!</div>}
  }

  return (
    <div className={styles.main}>
        <Nav/>
        <div className={styles.body}>
          <div className={styles.subBody}><Sidebar /></div>
          <div className={styles.subBody}>{renderPage()}</div>
          <div className={styles.subBody}>{children}</div>
        </div>
    </div>
  );
}

export default Layout;
