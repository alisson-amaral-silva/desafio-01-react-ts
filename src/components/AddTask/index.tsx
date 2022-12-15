import { PlusCircle } from 'phosphor-react'
import styles from './AddTask.module.css'
export function AddTask() {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  )
}
