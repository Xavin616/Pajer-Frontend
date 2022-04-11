import Image from 'next/image'
import styles from '../styles/Popup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMyPageQuery, getMyPage } from '../lib/apiSlice'
import { useAddSourceQuery, addSource } from '../lib/addSlice';

function Popup({ source, trigger, setTrigger }) {
  const dispatch = useDispatch();
  const { data, refetch } = useGetMyPageQuery()

  const Folder = ({ name, source, id }) => {
    const pk = source.id
    const { refetch } = useGetMyPageQuery()

    const add = async (id, pk) => {
      dispatch(addSource.initiate({id, pk}))
      refetch()
    }

    return (
      <div className={styles.mainFolder}>
        <div className={styles.folder}>
          <Image
            src={'/folder.png'}
            alt={'folder-icon'}
            height={30}
            width={30}
          />
          <div className={styles.folderName}>
            <h4>{name}</h4>
          </div>
        </div>
        <button onClick={() => add(id, pk)} className={styles.add}>
          Add
        </button>
      </div>
    )
  }

  const renderFolder = () => {
    return data.map((e,i) => {
      return <Folder key={i} name={e.name} id={e.id} source={source}  />
    })
  }

  return (trigger ? (
    <div className={styles.main}>
        <main className={styles.body}>
          <h3 className={styles.header}>Follow</h3>
          <div className={styles.head}>  
            <div className={styles.sourcecard}>
              <Image
                src={source.icon}
                alt={'source-icon'}
                height={40}
                width={40}
                className={styles.icon}
              />
              <div className={styles.sourcename}>
                <h4 className={styles.name}>
                  {source.name}
                </h4>
                <span>{(source.link).slice(7,)}</span>
              </div>
            </div>
          </div>
          <div className={styles.folders}>
            <h3 className={styles.title}>Add to:</h3>
            <div className={styles.folderList}>
              {renderFolder()}
              <div className={styles.mainFolder}>
                <div className={styles.create}>
                  <h4>Create New Folder</h4>
                  <button className={styles.createButton}>
                    +
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => {setTrigger(false); refetch()}}
            className={styles.cancel}
          >
            Cancel
          </button>
        </main>
    </div>
  ) 
  : null 
  )
}

export default Popup