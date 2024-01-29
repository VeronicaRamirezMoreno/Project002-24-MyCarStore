import { useState } from 'react'
import Header from './components/Header'
import './App.css'

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
      </div>
    </>
  )
}

export default App