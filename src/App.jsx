import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'

function App() {

  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  console.log(location);

  return (
    <article>
      <header>
        <img className='bg-header' src="/bg-header.svg" alt="Rick and Morty" />
      </header>
      <form className='form' onSubmit={handleSubmit}>
        <input className='input-from' ref={inputLocation} type="text" placeholder='ID'/>
        <button className='btn-from'>Search</button>
      </form>
      {
        hasError
          ?
          <h2 className='text-error'>❌ Hey! you must provide an id from 1 to 126</h2>
          :
          <>
            <LocationCard location={location} />
            <div>
              {
                location?.residents.map(url => (
                  <ResidentCard key={url} url={url} />
                ))
              }
            </div>
          </>
      }
    </article>
  )
}

export default App
