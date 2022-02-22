import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
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
