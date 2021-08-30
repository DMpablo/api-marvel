import { Link } from "react-router-dom";
import styles from "./navBar.module.scss";

export const NavBar = () =>{

    return (
        <div className={styles.containerNavbar}>
          
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png" alt="img" />
            </Link>
            
        </div>
        )

}