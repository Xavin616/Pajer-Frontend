import styles from '../styles/Reader.module.css';
import Preview from './Preview';
import FeedList from './FeedList';
import PlaceImages from './PlaceImages';
import { useGetFeedsByIdQuery } from '../lib/apiSlice';
import { useSelector } from 'react-redux';

function Reader() {
  const feed = useSelector((state) => state.feedState.feed)
  const sourceId = useSelector((state) => state.sourceState.source.id) 
  const { data, error } = useGetFeedsByIdQuery(sourceId);


  let feeds = [{id: 0, title: 'test'}];

  const renderFeed = () => {
    if (data) {
      return <FeedList feeds={data}/>
    } else if (error) {
      return (
        <PlaceImages 
          src={'/undraw_content.svg'} 
          alt="search" 
          words="Click on a source to get new feeds!"
        />)
    } else {return <div>LOADING!!!</div>}
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
