const LocationCard = ({location}) => {
  return (
    <article className="location">
        <h2 className="title-location">{location?.name}</h2>
        <ul>
            <li><span>Type : </span><span>{location?.type}</span></li>
            <li><span>Dimension : </span><span>{location?.dimension}</span></li>
            <li><span>Population : </span><span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}
export default LocationCard