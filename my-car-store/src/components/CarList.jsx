import './CarList.css'
import CarData from './Car'

const CarList = ({ cars }) => {
    return (
      < >
        {cars.map((car, index) => (
          <CarData key={index} car={car} />
        ))}
      </>
    );
  };
  
  export default CarList;