import styles from './App.module.css'
import { Header } from './components/Header'
import './global.css'
import { Task } from './components/Task'

function App() {
  // const tasks = [
  //   {
  //     id: 1,
  //     description: 'Estudar ReactJS',
  //     isCompleted: false
  //   },
  //   {
  //     id: 2,
  //     description: 'Estudar ReactJS',
  //     isCompleted: true
  //   }
  // ] as Tasks[]



  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Task />
        </main>
      </div>
    </>
  )
}

export default App
