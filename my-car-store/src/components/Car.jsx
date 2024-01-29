import './Car.css'


const CarData = ({ car }) => {

    const isNew = () => {
        return car.year >= 2009 ? 'new' : 'hide'
    }

    return (
        <>
            <div className='car-card'>
                <h3>Our Car num. {car.id}</h3>
                <div className="car-prop">
                    <div className={isNew()}></div>
                    <p>Id: {car.id}</p>
                    <p>Maker: {car.maker}</p>
                    <p>Model: {car.model}</p>
                    <p>Year: {car.year}</p>
                    <p>Country: {car.country}</p>
                    <p>Price: {car.price.slice(0, -3)}</p>
                    <p>Car Vin: {car.car_vin}</p>
                </div>
            </div>
        </>
    )
}

export default CarData