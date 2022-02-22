import styles from '../styles/FeedList.module.css';
import classes from '../styles/FeedItem.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFeed } from '../lib/feed';

function FeedList({ feeds }) {
  const [current, setCurrent] = useState(100);
  const colors = ['#1eff00', '#ff9914', '#f21b3f', '#08bdbd', '#faff00']
  const sourceId = useSelector((state) => state.sourceState.source.id)

  useEffect(() => {
    setCurrent(100)
  }, [sourceId])
  

  function FeedItem({ feed, classId, color }) {
    const shadow1 = '0 0 0'
    const shadow2 = `-3.4px 3.4px 0px ${color}`

    const newFeed = {...feed, color: color,}

    const dispatch = useDispatch();

    let shadow;
    classId === -3 ? shadow = shadow1 : shadow = shadow2

    return (
      <div
        tabIndex={1}
        id={ classId === -3 ? classes.normal : classes.dark} 
        className={classes.root}
        style={{boxShadow: `${shadow}`}}
        onClick={() => {setCurrent(feed.id-1); dispatch(setFeed(newFeed))}}
      >
        <div className={classes.index}>
          <div style={{backgroundColor: color,}} className={classes.id}>
            <span className={classes.span}>{feed.id}</span>
          </div>
        </div>
        <div className={classes.body}>
          <h4 className={classes.title}>{feed.title}</h4>
        </div>
      </div>
    )
  }

  const renderFeed = () => {
    return feeds.map((e,i) => { 
      return <FeedItem
              classId={current === i ? -2 : -3}
              key={i}
              feed={e}
              color={colors[i % colors.length]}
            />
      }
    )
  }

  return (
    <div className={styles.main}>
      <div className={styles.root}>
        {renderFeed()}
      </div>
    </div>
    );
}

export default FeedList;
