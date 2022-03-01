import styles from '../styles/Userpage.module.css';
import Folder from './Folder';

function Userpage({ folders }) {
  return (
    <div className={styles.root}>
      {folders.map((e,i) => <Folder key={i} folder={e}/>)}
    </div>);
}

export default Userpage;
