import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({url}) => {

    const [resident, getResident] = useFetch(url)
    useEffect(() => {
        getResident()
    }, [])
    
    console.log(resident);

  return (
    <article className="article-card">
        <header>
            <img src={resident?.image} alt="" />
            <div>
                <div className="circle"></div>
                <span className="span-status">{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li className="li-data"><span className="span1-data">Specie : </span><span className="span2-data">{resident?.species}</span></li>
                <li className="li-data"><span className="span1-data">Origin : </span><span className="span2-data">{resident?.origin.name}</span></li>
                <li className="li-data"><span className="span1-data">Eppisodes where appear : </span><span className="span2-data">{resident?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard