const LocationCard = ({location}) => {
  return (
    <article className="location">
        <h2 className="title-location">{location?.name}</h2>
        <ul className="ul-location">
            <li className="li-location"><span>Type : </span><span className="span-2">{location?.type}</span></li>
            <li className="li-location"><span>Dimension : </span><span className="span-2">{location?.dimension}</span></li>
            <li className="li-location"><span>Population : </span><span className="span-2">{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}
export default LocationCard