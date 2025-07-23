//工程化
/* import './button.css'

const Button = () => {
    return (
     <button className="button">A 组件</button>
    )
  }
  export default Button */

 
import styles from './button.module.css'

const Button = () => {
    return (
     <button className={styles.button}>A 组件</button>
    )
  }
  export default Button