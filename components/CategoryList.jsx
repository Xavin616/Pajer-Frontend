import classes from '../styles/Category.module.css'
import styles from '../styles/CategoryList.module.css'

function Category({name, id}) {
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h4 className={classes.name}>{name}</h4>                
            </div>
        </div>
    )
}

function CategoryList({ categories }) {
    const renderView = () => {
        if (categories && categories.length > 0) {
            return categories.map((e,i) => { 
                return <Category key={i} name={e.name} id={e.id}/>
            })
        } else {return <>Empty!</>}
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h4 className={styles.head}>Explore</h4>
            </div>
            <div className={styles.container}>
                {renderView()}
            </div>
        </div>
    )
}

export default CategoryList