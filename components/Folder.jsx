import { useState, useEffect } from 'react';
import styles from '../styles/Folder.module.css';
import Image from 'next/image';
import classes from '../styles/Source.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSource } from '../lib/source';
import { useRouter } from 'next/router';

function Folder({ folder, open }) {
  //const [newOpen, setOpen] = useState(open)
  const [current, setCurrent] = useState(100);
  const sources = folder.sources
  const sourceSelect = useSelector((state) => state.sourceState.source)
  const router  = useRouter()
  let location;

  if (router.asPath === '/reader') { location = ''}
  else (location = '/reader')


  function Source({ source, style }) {
    const dispatch = useDispatch()

    return (
      <div
        id={style === -2 ? classes.normal : classes.dark } 
        className={classes.root}
        onClick={() => {dispatch(setSource(source))}}
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
          style={e.id === sourceSelect.id ? -3 : -2 }
          key={i} 
          source={e} 
        />
      )
  }


  return (
    <div 
      //onClick={() => {setOpen(folder.id); console.log(newOpen)}} 
      className={styles.root}
    >
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
      <div className={styles.drawer}>{renderSources()}</div>
    </div>);
}

export default Folder;
