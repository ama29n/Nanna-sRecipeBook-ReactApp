import styles from './Search.module.css';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search/' + input);
        setInput('');
    }
    
    return (
    <form onSubmit = {submitHandler} className = {styles.form} action="">
        <label className = {styles.label} htmlFor="">{<FaSearch />}</label>
        <input placeholder='Search for a dish...' value = {input} onChange = {(e) => setInput(e.target.value)} className = {styles.input} type="text" />
    </form>
    )
}

export default Search;