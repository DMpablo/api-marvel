import { Link } from 'react-router-dom'
import style from './card.module.scss'

export const Card = ({e, key})=>{

    return (
      <Link to={`/${e.id}`}>
        <div  className={style.cardContainer}>
          <p>{e.name}</p>
          <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt="img" />
        </div>
      </Link>
    )

}