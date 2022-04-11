import styles from '../styles/Userpage.module.css';
import Folder from './Folder';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Userpage({ folders }) {
  const [current, setCurrent] = useState(100)

  const renderFolders = () => {
    return folders.map((e,i) => <Folder open={e.id === current ? -3 : -2} key={i} folder={e}/>)
  }

  return (
    <div className={styles.root}>
      {renderFolders()}
    </div>);
}

export default Userpage;
