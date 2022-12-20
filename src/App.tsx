import styles from './App.module.css'
import { Header } from './components/Header'
import './global.css'
import { Task } from './components/Task'

function App() {

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
