import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Userpage from './Userpage';
import { useGetMyPageQuery } from '../lib/apiSlice';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../lib/userReducer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Layout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userState.user)

  useEffect(()=>{
    if (userState.isAuthenticated === false) {
      let login = typeof window !== 'undefined' ? localStorage.getItem('login') : null
      if (login === null) { router.push('/reader')}
      else { 
        dispatch(setUser(JSON.parse(login))); 
        router.push('/login')
      }
    }}, [ router, dispatch, userState ]);

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
