import { Trash } from 'phosphor-react'
import styles from './TaskItem.module.css'
import { TaskProps } from '../Task'

interface TaskItemProps {
  task: TaskProps
  onDeleteTask: (id: string) => void
  onCompleteTask: (id: string) => void
}

export function TaskItem({
  task,
  onDeleteTask,
  onCompleteTask
}: TaskItemProps) {
  function handleCompleteTask() {
    onCompleteTask(task.id)
  }

  function handleDeleteComment() {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.boxWrapper}>
      <input className={styles.checkbox} onClick={handleCompleteTask} type="checkbox" />
      <span
        className={
          task.isCompleted ? styles.completedTaskText:  styles.defaultTaskText
        }
      >
        {task.description}
      </span>

      <button
        onClick={handleDeleteComment}
        className={styles.deleteTaskWrapper}
        title="Deletar task"
      >
        <Trash size={20} />
      </button>
    </div>
  )
}
