import styles from './Button.module.css'
function Button({children}) {
  return <button type="Submit" className={styles.button}>{children}</button>;
}
export default Button