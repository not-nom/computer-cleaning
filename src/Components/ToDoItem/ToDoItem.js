import styles from "./ToDoItem.module.css";

function ToDoItem({finished,text,priority,id}) {
  return (
    <div key={id} className={styles.item}>
        <input className={styles.checkbox} type='checkbox' defaultchecked={finished}/>
        <p className={styles.summary}>{text}</p>
        <span className={styles[priority]}/>
    </div>
  )
}
export default ToDoItem