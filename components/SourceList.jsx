import { useState } from 'react'
import Popup from './Popup'
import styles from '../styles/SourceList.module.css';
import classes from '../styles/SourceCards.module.css';
import Image from 'next/image';
import { useGetSourcesQuery } from '../lib/categoryApi';


function SourceList() {
    const [sour, setSour] = useState(null)
    const { data, error } = useGetSourcesQuery();
    const [popup, setPopup] = useState(false)
    //console.log(data)

    function SourceCards({ source, setTrigger }) {
        return (
            <div className={classes.root}>
                <div className={classes.body}>
                    <Image src={source.icon} alt={source.name} className={classes.icon} height={23} width={23} />
                    <h5 className={classes.title}>
                        {source.name}
                    </h5>
                </div>
                <div className={classes.attachment}>
                    <button  
                        onClick={() => {setSour(source); setTrigger(true)}}
                        className={classes.add}
                    >
                    Follow
                    </button>
                </div>
            </div>
        )
    }    

    const renderView = () => {
        if (data && data.length > 0) {
            return (data.slice(0,9)).map((e,i) => {
                return <SourceCards source={e} key={i} setTrigger={setPopup} />
            })
        } else return <>Empty</>
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h4 className={styles.head}>Popular Sources</h4>
            </div>
            <div className={styles.container}>
                {renderView()}
            </div>
            <Popup source={sour} trigger={popup} setTrigger={setPopup} />
        </div>
    )
}

export default SourceList