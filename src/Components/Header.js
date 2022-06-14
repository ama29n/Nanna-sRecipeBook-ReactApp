import {Link} from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
  return (
    <div className = {styles.header}>
        <Link to = {'/'} style={{ textDecoration: 'none', color: 'white' }}><h1>Nanna's Recipe Book</h1></Link>
    </div>
  )
}

export default Header;