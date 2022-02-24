import styles from '../styles/Preview.module.css';
import { useEffect } from 'react';

function Preview({ feed }) {
  const styled = {backgroundColor: feed.color,}
  const styledd = () => {return feed.color === 'black'} 

  useEffect(() => {
    const preview = document.getElementById('preview')
    let list  = preview.querySelectorAll('img')
    let plist = preview.querySelectorAll('p')
    let li = preview.querySelectorAll('li')
    let h3 = preview.querySelectorAll('h3')
    let h1 = preview.querySelectorAll('h1')
    console.log(preview)
    for (let i = 0; i < list.length; i++) {
      list[i].style.width = '100%'
    }
    for (let i = 0; i < plist.length; i++) {
      plist[i].style.marginTop = '5px'
      plist[i].style.fontSize = '14px'
      plist[i].style.lineHeight = '19px'
    }
    for (let i = 0; i < li.length; i++) {
      li[i].style.marginTop = '5px'
      li[i].style.fontSize = '14px'
      li[i].style.lineHeight = '19px'
    }

    for (let i = 0; i < h3.length; i++) {
      h3[i].style.fontSize = '15px'
      h3[i].style.lineHeight = '19px'
    }

    for (let i = 0; i < h1.length; i++) {
      h1[i].style.fontSize = '16px'
      h1[i].style.lineHeight = '22px'
    }
  }, [feed])
  

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3 style={{fontWeight: 'bolder',textShadow: `-2px 0.8px 0px ${feed.color}`}}>{feed.title}</h3>
        </div>
      </div>
      <div className={styles.body}>
        <div id='preview' className={styles.injected} dangerouslySetInnerHTML={{__html: feed.description}} />
        <a href={feed.link} target="_blank" rel="noopener noreferrer">
          <button 
            className={styles.button} 
            //onClick={() => {styledd()}}
          >
            Read More
          </button>
        </a>
      </div>
    </div>
  );
}

export default Preview;
