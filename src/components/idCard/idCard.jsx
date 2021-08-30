import { useParams } from 'react-router-dom'
import style from './idCard.module.scss'


export const IdCard = ({e})=>{
    const {id} = useParams()
    const heroID = e.find((x)=> x.id === parseInt(id))

    console.log(heroID.comics.items[0].resourceURI);

    return (
      
        <div className={style.cardContainer}>
        <title>{heroID.name}</title>
            <div className={style.containerOne}>
                <div className={style.containerName}>
                    <h2>{heroID.name}</h2>
                    <img src={`${heroID.thumbnail.path}.${heroID.thumbnail.extension}`} alt="img" />
                </div>
                {
                    heroID.description === "" ? ("") : (
                        <div className={style.containerDescription}>
                            <h3>Descriptions...</h3>
                            <p>
                                {heroID.description}
                            </p>         
                        </div>    
                    )
                }
                  
            </div>

            <div className={style.containerTwo}>
                <div className={style.containerComics}> 
                    <h3>Comics: {heroID.comics.available}</h3>
                    {
                    heroID.comics.items.map( (x) => 
                    <div key={x.id}>
                        <p>{x.name}</p>
                        {/*   <a href={heroID.collectionURL}></a> */}
                    </div>
                    )}
                </div>
                
                <div className={style.containerSeries}>
                    <h3>Series: {heroID.series.available}</h3>
                    {
                    heroID.series.items.map( (x) => 
                    <div key={x.id}>
                        <p>{x.name}</p>
                        {/*   <a href={heroID.collectionURL}></a> */}
                    </div>
                    )}
                </div>

            </div>
            <a href={heroID.urls[0].url}>more about {heroID.name}</a>
        </div>
     
    )

}