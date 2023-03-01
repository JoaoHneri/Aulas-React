import styles from './Frase.module.css';

function Frases(){

    return(
        <div className={styles.fraseContainer}>
            <p>A vingança nunca é plena</p>
            <div className={styles.fraseContent}>
                <p > Aprender e Evoluir</p>
            </div>
        </div>
        
    )
}

export default Frases;