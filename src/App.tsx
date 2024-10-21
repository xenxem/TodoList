import './styles.css';
import styles from './App.module.css';
import {PlusCircle} from 'phosphor-react';
import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { Task } from './components/Task';
import { TaskEmpty } from './components/TaskEmpty';
import {v4 as uuidv4} from 'uuid';


export interface TarefaType {
  id: string;
  titulo: string;
  concluida: boolean;
}


function App() {  
  
 
  const [tarefasConcluidas,setTarefasConcluidas] = useState<number>(0);  
  const [tarefa, setTarefa] = useState<TarefaType[]>([]);
  const [tarefaDescricao, setTarefaDescricao] = useState<string>('');

  useEffect(()=>{
    const tarefas = tarefa.filter(tarefa => tarefa.concluida === true);
    setTarefasConcluidas(tarefas.length);
  },[tarefa]);
 
  const onClickStatus = (id: string,  concluida: boolean) => {        
    setTarefa((prevState):TarefaType[] =>( 
      prevState.map((tarefa) =>
        tarefa.id === id ? {...tarefa, concluida: !concluida } : tarefa
    )))        
    //finishedTasks();
  };

  const deleteTask = (id:string)=>{    
    const tarefas = tarefa.filter(tarefa => tarefa.id !== id);
    setTarefa(tarefas);
    //setTarefasConcluidas(tarefas.length);       
  }

  // const finishedTasks = () => {
  //     const tarefas = tarefa.filter(tarefa => tarefa.concluida === true);
  //     setTarefasConcluidas(tarefas.length);       
  // } 

 function handleNewTask() {    
  const novaTarefa: TarefaType = {
    id: uuidv4(), 
    titulo: tarefaDescricao,
    concluida: false};
    setTarefa((prevState) => ([...prevState,novaTarefa]));      
    setTarefaDescricao('');     
 };

 const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setTarefaDescricao(value);
  }

  const reenderTaskInfo = () => {

    if(tarefa.length === 0){
      return (
        <>
          <div className={styles.headerInfoTasks}>
            <span>Tarefas criadas <span className={styles.completedTasks}>{0}</span></span>
            <span className={styles.completedTaskText}>Concluídas <span className={styles.totalTasks}>{0} de {0}</span></span>
          </div> 
          <div>
            <TaskEmpty />
          </div>
        </>
      )
    }else{
      return (
      <>
        <div className={styles.headerInfoTasks}>
           <span>Tarefas criadas <span className={styles.completedTasks}>{tarefa.length}</span></span>
           <span className={styles.completedTaskText}>Concluídas <span className={styles.totalTasks}>{tarefasConcluidas} de {tarefa.length}</span></span>
        </div>
        <div className={styles.contentInfoTasks}>
          { 
            tarefa.length > 0 && (
              tarefa.map(t => 
              <Task 
                key={t.id}
                id={t.id} 
                titulo={t.titulo} 
                concluida={t.concluida}
                setTarefa={onClickStatus}
                deleteTask={deleteTask}
              />)
            )
          }
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
        value={tarefaDescricao}                
        />
      <button 
        onClick={handleNewTask} 
        className={ tarefaDescricao.length === 0 ? styles.buttonNewTaksDisabled : styles.buttonNewTaks}        
        disabled={tarefaDescricao.length === 0 ? true : false}
        >Criar<PlusCircle size={24} />        
      </button>
    </div> 
    <div className={styles.containerEmptyContent}>
      <div className={styles.containerTask}>
          { reenderTaskInfo() }
      </div>
    </div>       
   </Fragment>
  )
}
export default App
