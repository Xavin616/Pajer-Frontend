import styles from '../styles/Reader.module.css';
import Preview from './Preview';
import FeedList from './FeedList';
import PlaceImages from './PlaceImages';

function Reader({ feed, data, error }) {
  
  const renderFeed = () => {
    if (data) {
      return <FeedList feeds={data}/>
    } 
    else if (error) {
      return (
        <PlaceImages 
          src={'/undraw_content.svg'} 
          alt="search" 
          words="Click on a source to get new feeds!"
        />)
    } 
    else {return (
        <PlaceImages 
          src={'/undraw-search.svg'} 
          alt="search" 
          words="Searching!"
        />)
      }
  }

  const renderPreview = () => {
    if (feed.status !== 'undefined') {return <Preview feed={feed}/>}
    else {
      return (
        <PlaceImages
          src={'/undraw-reading.svg'}
          alt={'reading'}
          words="Preview feeds here!"
        />
    ) }
  }

  return (
    <div className={styles.root}>
      <div className={styles.list}>{renderFeed()}</div>
      <div className={styles.preview}>{renderPreview()}</div>
    </div>);
}

export default Reader;
