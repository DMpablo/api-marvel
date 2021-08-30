import { Card } from "../card/card";
import styles from "./cards.module.scss";


export const Cards = ({personajes})=>{

    return (
    <div className={styles.containerCards}>
      <title>Api - Marvel</title>
    {
        personajes.map((e)=>(
        <Card e={e}/>
      ))    
    }
      </div>)

}