import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react'
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
  const [completedTask, setCompletedTask] = useState<number>(0)

  function deleteTask(idToBeDeleted: string) {
    const tasksWithoutDeletedOne = taskList.filter((task) => {
      return task.id !== idToBeDeleted
    })

    setTaskList(tasksWithoutDeletedOne)

    const completedTasks = taskList.filter((task) => {
      return task.isCompleted === true
    })

    setCompletedTask(completedTasks.length)
  }

  function completeTask(idToBeCompleted: string) {
    const completedTasksList = taskList.map((task) => {
      if (task.id === idToBeCompleted) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTaskList(completedTasksList)
  }

  useEffect(() => {
    const numberOfCompletedTasks = taskList
      .filter(({ isCompleted }) => isCompleted === true)
      .reduce<number>((sum: number, person) => {
        return sum + Number(person.isCompleted)
      }, 0)

    setCompletedTask(numberOfCompletedTasks)
  }, [taskList])

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
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewTaskEmpty = !newTaskText.length

  return (
    <>
      <form onSubmit={handleCreatTask}>
        <input
          type="text"
          name="task"
          onChange={handleNewTaskChange}
          required
          onInvalid={handleInvalidTask}
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
        />
        <button disabled={isNewTaskEmpty} className={styles.createTaskButton}>
          Criar <PlusCircle size={20} />
        </button>
      </form>
      <header className={styles.headerWrapper}>
        <strong className={styles.createdTasks}>
          Tarefas criadas
          <span>{taskList.length}</span>
        </strong>
        <strong className={styles.completedTasks}>
          Concluidas
          {taskList.length ? (
            <span>
              {completedTask} de {taskList.length}
            </span>
          ) : (
            <span>{taskList.length}</span>
          )}
        </strong>
      </header>
      {taskList?.length ? (
        taskList.map((task) => {
          return (
            <TaskItem
              key={task.id}
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
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
