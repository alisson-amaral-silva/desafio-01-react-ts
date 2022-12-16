import styles from './EmptyList.module.css'
import clipboard from '../../assets/clipboard.svg'
export function EmptyList() {
  return (
    <div className={styles.emptyListWrapper}>
      <img src={clipboard} alt="icone de lista de itens" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
