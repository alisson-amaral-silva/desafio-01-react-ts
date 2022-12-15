import styles from './TaskList.module.css'
import clipboard from '../../assets/clipboard.svg'

export interface Tasks {
  id: number
  description: string
  isCompleted: boolean
}

export interface TaskListProps {
  tasks?: Tasks[]
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      <header className={styles.headerWrapper}>
        <strong className={styles.createdTasks}>
          Tarefas criadas
          <span>5</span>
        </strong>
        <strong className={styles.completedTasks}>
          Concluidas
          <span>2 de 5</span>
        </strong>
      </header>
      {!tasks?.length && (
        <div className={styles.emptyListWrapper}>
          <img src={clipboard} alt="icone de lista de itens" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </>
  )
}
