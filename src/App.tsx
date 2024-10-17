import './styles.css';
import styles from './App.module.css';

function App() {  
  return (
    <>
    <header>
        <div className={styles.headerBackground}>
          <img src='../../public/Logo.svg' />
        </div>  
    </header>
    <div className={styles.containerNewTask}>
      <input type='text' className={styles.inputNewTaks} />

      <button className={styles.buttonNewTaks}>Criar</button>
    </div>    
   </>
  )
}
export default App
