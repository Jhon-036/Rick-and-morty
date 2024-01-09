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
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li><span>Specie</span><span>{resident?.species}</span></li>
                <li><span>Origin</span><span>{resident?.origin.name}</span></li>
                <li><span>Eppisodes where appear</span><span>{resident?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard