import { Link } from "react-router-dom";
import styles from "./footer.module.scss";


export const Footer = ()=>{

    return (
    <div className={styles.containerFooter}>
        <p>Este es un proyecto que solo tiene como objetivo desarrollar skills como developer.</p>
        <Link to="https://developer.marvel.com/"> 
            La API utilizada se encuentra en el sitio oficial de Marvel
        </Link>

        <Link to="https://developer.marvel.com/"> 
            Dmpablo GitHub
        </Link>
        
    </div>)

}