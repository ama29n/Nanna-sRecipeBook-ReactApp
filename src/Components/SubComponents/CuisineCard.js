import styles from './CuisineCard.module.css';

function CuisineCard(props) {
  return (
    <div className = {styles.card}>{props.children}</div>
  )
}

export default CuisineCard;