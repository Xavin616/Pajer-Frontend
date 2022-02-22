import { useState } from 'react';
import styles from '../styles/Folder.module.css';
import Image from 'next/image';
import classes from '../styles/Source.module.css'
import { useDispatch } from 'react-redux';
import { setSource } from '../lib/source';

function Folder({ folder }) {
  const [current, setCurrent] = useState(100);
  const sources = folder.sources

  function Source({ source, style }) {
    const dispatch = useDispatch()

    return (
      <div
        id={style === -2 ? classes.normal : classes.dark } 
        className={classes.root}
        onClick={() => {setCurrent(source.id); dispatch(setSource(source))}}
      >
          <div className={classes.img}>
            {<Image
              src={source.icon} 
              alt={source.name} 
              width={26} 
              height={26}
              className={classes.logo}
            />}
          </div>
          <div className={classes.den}><h4 className={classes.name}>{source.name}</h4></div>
      </div>);
  }

  const renderSources = () => {
    return sources.map((e,i) => 
        <Source 
          style={e.id === current ? -3 : -2 }
          key={i} 
          source={e} 
        />
      )
  }

  return (
    <div className={styles.root}>
      <div className={styles.folder}>
        <Image 
          src={'/folder.png'} 
          alt={folder.name} 
          width={30} 
          height={30}
          className={styles.logo}
        />
        <h3 className={styles.name}>{folder.name}</h3>
      </div>
      <div className={styles.drawer}>
        {renderSources()}
      </div>
    </div>);
}

export default Folder;
