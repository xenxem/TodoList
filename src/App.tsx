import './styles.css';
import styles from './App.module.css';
import {PlusCircle} from 'phosphor-react';
import { Fragment } from 'react';


function App() {  

  //const [task, setTask] useState('');


  function handleNewTask(){
      //const name = e.target.name;
      //const value = e.target.value;

  }

  return (
    <Fragment>
    <header>
        <div className={styles.headerBackground}>
          <img src='../../public/Logo.svg' />
        </div>  
    </header>
    <div className={styles.containerNewTask}>
      <input 
        type='text' 
        className={styles.inputNewTaks} 
        onChange={handleNewTask}
        />
      <button className={styles.buttonNewTaks}>Criar<PlusCircle size={24} /></button>
    </div> 
    <div className={styles.containerEmptyContent}>
      <div className={styles.containerTask}>
          <div className={styles.headerInfoTasks}>
              <span>Tarefas criadas <span className={styles.completedTasks}>5</span></span>
              <span className={styles.completedTaskText}>Concluídas <span className={styles.totalTasks}>1 de 5</span></span>
          </div>
          <div className={styles.contentInfoTasks}>
              teste
          </div>
      </div>
    </div>
       
   </Fragment>
  )
}
export default App
