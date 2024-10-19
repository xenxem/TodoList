import './styles.css';
import styles from './App.module.css';
import {PlusCircle} from 'phosphor-react';
import { ChangeEvent, Fragment, useState } from 'react';
import { Task } from './components/Task';


function App() {  
  
  const [tarefasTotais,setTarefasTotais] = useState<number>(0);
  const [tarefasConcluidas,setTarefasConcluidas] = useState<number>(0);  
  const [tarefa, setTarefa] = useState<string>('');

 function handleNewTask() {            
      setTarefasTotais(prevState => prevState +1);  
      setTarefa('');
  };

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setTarefa(value);
  }


  const reenderTaskInfo = () => {

    if(tarefasTotais === 0){
      return (
        <div className={styles.headerInfoTasks}>
          <span>Tarefas criadas <span className={styles.completedTasks}>{0}</span></span>
          <span className={styles.completedTaskText}>Concluídas <span className={styles.totalTasks}>{0} de {0}</span></span>
        </div> )
    }else{
      return (
      <>
        <div className={styles.headerInfoTasks}>
           <span>Tarefas criadas <span className={styles.completedTasks}>{tarefasTotais}</span></span>
           <span className={styles.completedTaskText}>Concluídas <span className={styles.totalTasks}>{tarefasConcluidas} de {tarefasTotais}</span></span>
        </div>
        <div className={styles.contentInfoTasks}>
          <Task />                            
        </div>
      </>) 
    }
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
        placeholder='Adicione uma nova tarefa'
        className={styles.inputNewTaks} 
        onChange={handleInputChange}        
        value={tarefa}                
        />
      <button 
        onClick={handleNewTask} 
        className={ tarefa.length === 0 ? styles.buttonNewTaksDisabled : styles.buttonNewTaks}        
        disabled={tarefa.length === 0 ? true : false}
        >Criar<PlusCircle size={24} />        
      </button>
    </div> 
    <div className={styles.containerEmptyContent}>
      <div className={styles.containerTask}>
          {reenderTaskInfo()}
      </div>
    </div>       
   </Fragment>
  )
}
export default App
