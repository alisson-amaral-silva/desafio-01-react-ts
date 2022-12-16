import { EmptyList } from '../EmptyList'
import { TaskItem } from '../TaskItem'
import styles from './TaskList.module.css'

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
      {tasks?.length ? (
        tasks.map((task) => {
          return <TaskItem id={task.description} task={task} />
        })
      ) : (
        <EmptyList />
      )}
    </>
  )
}
