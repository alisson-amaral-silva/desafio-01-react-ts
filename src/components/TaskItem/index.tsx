import { Trash } from 'phosphor-react'
import { Checkbox } from '../Checkbox'
import styles from './TaskItem.module.css'
import { TaskProps } from '../Task'

interface TaskItemProps {
  task: TaskProps
  id: string
  onDeleteComment: (id: string) => void
}

export function TaskItem({ id, task, onDeleteComment }: TaskItemProps) {
  function handleDeleteComment() {
    onDeleteComment(task.id)
  }
  return (
    <div className={styles.boxWrapper}>
      <Checkbox id={`${id}-checkbox`} />
      <span
        className={
          task.isCompleted ? styles.completedTaskText : styles.defaultTaskText
        }
      >
        {task.description}
      </span>

      <button onClick={handleDeleteComment} title="Deletar task">
        <Trash size={20} />
      </button>
    </div>
  )
}
