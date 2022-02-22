import styles from '../styles/Preview.module.css';

function Preview({ feed }) {
  const styled = {backgroundColor: feed.color,}
  const styledd = () => {return feed.color === 'black'} 

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3 style={{fontWeight: 'bolder',textShadow: `-2px 0.8px 0px ${feed.color}`}}>{feed.title}</h3>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.injected} dangerouslySetInnerHTML={{__html: feed.description}} />
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
