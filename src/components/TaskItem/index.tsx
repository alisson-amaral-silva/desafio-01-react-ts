import { Trash } from 'phosphor-react'
import { Checkbox } from '../Checkbox'
import styles from './TaskItem.module.css'
import { Tasks } from '../TaskList'

interface TaskItemProps {
  task: Tasks
  id: string
}

export function TaskItem({ id, task }: TaskItemProps) {
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

      <button>
        <Trash size={20} />
      </button>
    </div>
  )
}
