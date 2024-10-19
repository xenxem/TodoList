import styles from './TaskEmpty.module.css'


export const TaskEmpty = () =>{
    return(
        <>
            <div className={styles.descriptionTaskEmpty}>
                <img src='../../../public/Clipboard.svg' />
               <p className={styles.titleTextYou}>Você ainda não tem tarefas cadastradas</p>
               <p className={styles.titleTextMake}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </>
    );
} 