import styles from './Checkbox.module.css'
interface CheckboxProps {
  id: string
}
export function Checkbox({id}: CheckboxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}></label>
      </div>
    </div>
  )
}
