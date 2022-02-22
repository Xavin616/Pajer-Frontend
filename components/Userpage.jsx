import styles from '../styles/Userpage.module.css';
import Folder from './Folder';

function Userpage({ folders }) {
  return (
    <div className={styles.root}>
      <Folder folder={folders}/>
    </div>);
}

export default Userpage;
