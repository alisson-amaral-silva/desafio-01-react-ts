import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import './global.css'
import { TaskList, Tasks } from './components/TaskList'

function App() {
  const tasks = [
    {
      id: 1,
      description: 'Estudar ReactJS',
      isCompleted: false
    },
    {
      id: 2,
      description: 'Estudar ReactJS',
      isCompleted: true
    }
  ] as Tasks[]
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
        <main>
          <TaskList tasks={tasks} />
        </main>
      </div>
    </>
  )
}

export default App
