import Link from 'next/link'
//import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../lib/userReducer';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  useEffect(() => {
    let login = typeof window !== 'undefined' ? localStorage.getItem('login') : null
    if (login === null) { console.log('Go to login!')} 
    else {
      let data = JSON.parse(login)
      dispatch(setUser(data)); 
      router.push('/reader')
    }}
    , [router, dispatch]);
  

  return (
    <>
      <span>Hello!</span>
      <br />
      <br />
      <Link href="/reader">
        <a>Reader</a>
      </Link>
    </>
  )
}
