import styles from './card.module.css';

function Card(props) {
    return(
        <div className={styles.cardContainer}>
            <img src={props.img} alt="Video Thumbnail"/>
            <h3>{props.titulo}</h3>
            <p>{props.canal}</p>
            <p>{props.views} • {props.data}</p>
        </div>
    );
}

export default Card;