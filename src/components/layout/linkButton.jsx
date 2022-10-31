import { Link } from 'react-router-dom'
import styles from './linkButton.module.css'

function linkButton({to, text}){
    return (
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    )
}

export default linkButton