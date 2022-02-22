import styles from '../styles/CategoryList.module.css'

function Category({name, id}) {
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h4>{name}</h4>                
            </div>
        </div>
    )
}

function CategoryList() {
  return (
    <div className={styles.root}>
        <div className={styles.header}>
            <h3>Explore</h3>
        </div>
        <div className={styles.container}>

        </div>
    </div>
  )
}

export default CategoryList