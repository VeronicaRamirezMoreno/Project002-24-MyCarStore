import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import cars from './assets/cars.json'
import CarData from './components/Car.jsx'
import CarList from './components/CarList.jsx'


function App() {
  const [priceFilter, setPriceFilter] = useState('')
  const [makerFilter, setMakerFilter] = useState('')

  function handlePriceFilterChange(e) {
    setPriceFilter(e.target.value)
    setMakerFilter('')
  }

  function handleMakerFilterChange(e){
    setMakerFilter(e.target.value)
    setPriceFilter('')    
  }
  

  const filterCarsByPrice = () => {
    if (priceFilter === 'cheap') {
      return (
        <CarList cars={cars.filter(car => parseInt(car.price.slice(1, length - 3)) < 20000)} />
      )
    }
    else if (priceFilter === 'standard') {
      return (
        <CarList cars={cars.filter(car => parseInt(car.price.slice(1, length - 3)) > 20000 && parseInt(car.price.slice(1, length - 3)) < 40000)} />
      )
    }

    else if (priceFilter === 'luxury') {
      return (
        <CarList cars={cars.filter(car => parseInt(car.price.slice(1, length - 3)) > 40000)} />
      )
    }
    else {
      return (
        <CarList cars={cars} />
      )
    }
  }

  const filterCarsByMaker = () => {
    return (
      <CarList cars={cars.filter(car => car.maker.toLowerCase().includes(makerFilter.toLowerCase()))} />
    )
  }

  const filterCars = () => {
    if (priceFilter !== '') {
      return filterCarsByPrice()
    }
    else if (makerFilter !== '') {
      return filterCarsByMaker()
    }
    else {
      return (
        <CarList cars={cars} />
      )
    }


  }

  return (
    <>
      <div id="main">
        <Header title="MY CAR STORE" />
        <section className='publi-section'>
          <h4>Best Cars In the City</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section className='price-select'>
          <select value={priceFilter} onChange={handlePriceFilterChange}>
            <option value="all">Select a price range</option>
            <option value="cheap">Cheap</option>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
          </select>
          <input type="text" placeholder='Introduce a maker' value={makerFilter} onChange={handleMakerFilterChange} />
        </section>
        <section className='cards-container'>
          {/* <CarData car={cars[0]} /> */}
          {/* <CarList cars={cars} /> */}
          {filterCars()}
        </section>
        <Footer title2="MY CAR STORE - (c) All rights reserved." />

      </div>
    </>
  )
}

export default App