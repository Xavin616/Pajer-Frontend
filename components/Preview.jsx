import Image from 'next/image';
import styles from '../styles/Preview.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { previewer } from '../lib/previewer';
import { useGetMyPageQuery } from '../lib/apiSlice'

function Preview({ feed }) {
  const { data, refetch } = useGetMyPageQuery()
  const fId = feed.sourceId
  const sources = data[0].sources
  const source = sources.filter(s => s.id === fId)[0]

  useEffect(() => {
    previewer()
  }, [feed])
  

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image
            src={source.icon}
            alt={source.name}
            height={50}
            width={50}
            className={styles.img}
          />
        </div>
        <div className={styles.title}>
          <h3 style={{fontWeight: 'bolder',}}>{feed.title}</h3>
          <h5 className={styles.date}>{feed.date}</h5>
        </div>
      </div>
      <div className={styles.body}>
        <div id='preview' className={styles.injected} dangerouslySetInnerHTML={{__html: (feed.content === "null" ? feed.description : feed.content[0].value)}} />
        <a href={feed.link} target="_blank" rel="noopener noreferrer">
          <button 
            className={styles.button} 
          >
            Read More
          </button>
        </a>
      </div>
    </div>
  );
}

export default Preview;
