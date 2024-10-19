import styles from './Task.module.css'


export const Task = () =>{
    return(
        <>
            <div className={styles.descriptionTask}>
               <div><img src='../../../public/check.png'/></div> 
               <div className={styles.descriptionVerticalAlign}>Lorem impsum duloren Lorem impsum dulorenLorem impsum dulorenLorem impsum duloren</div>
               <div><img src='../../../public/trash.png' className={styles.tresh} /></div>
            </div>
        </>
    );
} 

