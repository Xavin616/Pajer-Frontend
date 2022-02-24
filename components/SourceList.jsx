import styles from '../styles/SourceList.module.css';
import classes from '../styles/SourceCards.module.css';
import Image from 'next/image';
import { useGetSourcesQuery } from '../lib/categoryApi';

function SourceCards({ name, id, src }) {
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <Image src={src} alt={name} className={classes.icon} height={20} width={20} />
                <h5 className={classes.title}>
                    {name}
                </h5>
            </div>
            <div className={classes.attachment}>
                <button className={classes.add}>Add</button>
            </div>
        </div>
    )
}

function SourceList() {
    const { data, error } = useGetSourcesQuery();

    console.log(data)

    const renderView = () => {
        if (data && data.length > 0) {
            return data.map((e,i) => {
                return <SourceCards src={e.icon} name={e.name} id={e.id} key={i}/>
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
        </div>
    )
}

export default SourceList