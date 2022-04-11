import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Userpage from './Userpage';
import PlaceImages from './PlaceImages';
import { useGetMyPageQuery, useGetUserDataQuery } from '../lib/apiSlice';
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
      if (login === null) {  router.push('/login')}
      else { 
        dispatch(setUser(JSON.parse(login))); 
        router.push('/reader')
      }
    }}, [ router, dispatch, userState ]);

  const { data, error } = useGetMyPageQuery();

  console.log(data);

  const renderPage = () => {
    if (data) {
      return <Userpage folders={data} />
    } else if (error) {
      return <div>ERROR!!</div>
    } else {
        return( 
              <PlaceImages 
                src={'/Position.gif'} 
                alt="search" 
                words=""
              />)
            }
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
