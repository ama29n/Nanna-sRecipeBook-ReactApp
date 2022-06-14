import styles from './Categories.module.css';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

function Categories() {
  return (
    <div className = {styles.outer}>
        <NavLink to = {'/cuisine/italian'} style={{ textDecoration: 'none' }}>
            <div className = {styles.link}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </div>
        </NavLink>

        <NavLink to = {'/cuisine/american'} style={{ textDecoration: 'none' }}>
            <div className = {styles.link}>
                <FaHamburger/>
                <h4>American</h4>
            </div>
        </NavLink>

        <NavLink to = {'/cuisine/thai'} style={{ textDecoration: 'none' }}>
            <div className = {styles.link}>
                <GiNoodles/>
                <h4>Thai</h4>
            </div>
        </NavLink>

        <NavLink to = {'/cuisine/chinese'} style={{ textDecoration: 'none' }}>
            <div className = {styles.link}>
                <GiChopsticks/>
                <h4>Chinese</h4>
            </div>
        </NavLink>
    </div>
  )
}

export default Categories;