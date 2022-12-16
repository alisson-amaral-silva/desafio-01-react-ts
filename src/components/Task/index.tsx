import { ChangeEvent, FormEvent, useState } from 'react'
import { EmptyList } from '../EmptyList'
import { TaskItem } from '../TaskItem'
import styles from './Task.module.css'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

export interface TaskProps {
  id: string
  description: string
  isCompleted: boolean
}

export interface TaskListProps {
  tasks?: TaskProps[]
}

export function Task() {
  const [taskList, setTaskList] = useState<TaskProps[]>([])
  const [newTaskText, setNewTaskText] = useState<string>('')

  function deleteTask(idToBeDeleted: string) {
    const tasksWithoutDeletedOne = taskList.filter((task) => {
      return task.id !== idToBeDeleted
    })

    setTaskList(tasksWithoutDeletedOne)
  }

  function handleCreatTask(event: FormEvent) {
    event.preventDefault()

    const newTaskItem = {
      id: uuidv4(),
      isCompleted: false,
      description: newTaskText
    }

    setTaskList([...taskList, newTaskItem])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    // event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleCreatTask}>
        <input
          type="text"
          name="task"
          onChange={handleNewTaskChange}
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.createTaskButton}>
          Criar <PlusCircle size={20} />
        </button>
      </form>
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
      {taskList?.length ? (
        taskList.map((task) => {
          return (
            <TaskItem
              onDeleteComment={deleteTask}
              id={task.description}
              task={task}
            />
          )
        })
      ) : (
        <EmptyList />
      )}
    </>
  )
}
