import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { NavBar } from '../Navbar';
import styles from './MainLayout.module.css';


export const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Contact Page </title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}
