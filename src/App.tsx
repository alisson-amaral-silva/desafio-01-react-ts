import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import './global.css'
import { TaskList } from './components/TaskList'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
        <main>
          <TaskList />
        </main>
      </div>
    </>
  )
}

export default App
