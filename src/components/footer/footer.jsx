import { Link } from "react-router-dom";
import styles from "./footer.module.scss";


export const Footer = ()=>{

    return (
    <div className={styles.containerFooter}>
        <div className={styles.declaracion}>
            <p>Este es un proyecto que solo tiene como objetivo desarrollar skills como developer.</p>
            <Link to="https://developer.marvel.com/"> 
            <p>La API utilizada se encuentra en el sitio oficial de Marvel</p>
            </Link>
        </div>
        <div className={styles.redes}>
            <Link to="https://github.com/DMpablo"> 
                <p>GitHub: DMpablo</p> 
            </Link>
            <Link to="https://www.linkedin.com/in/dmpablo/"> 
                 <p>Linkedin: Pablo De Marco</p>
            </Link>
        </div>
       
      
        
    </div>)

}