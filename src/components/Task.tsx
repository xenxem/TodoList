import styles from './Task.module.css'
import TreshSVG from './TreshSVG';

export const Task = () =>{
    return(
        <>
            <div className={styles.descriptionTask}>
               <div><img src='../../../public/check.png' className={styles.check}/></div> 
               <div className={styles.descriptionVerticalAlign}>Lorem impsum duloren Lorem impsum dulorenLorem impsum dulorenLorem impsum duloren</div>
               <div><TreshSVG /> </div>
            </div>
        </>
    );
} 

