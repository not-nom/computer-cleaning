import Button from "../Button/Button"
import Select from "../Select/Select"
import TextField from "../TextField/TextField"
import styles from './ToDoEditor.module.css'

function ToDoEditor() {
  return (
        <form><TextField placeholder='Your quest'/><Select/><Button>Submit</Button></form>
        )
}
export default ToDoEditor