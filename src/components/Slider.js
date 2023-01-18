import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { images } from "../assets";


const Slider= ({images}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='py-2 text-center rounded '   style={{"height":"100%" }}>
    {
      images?.map((img)=>(
        <Carousel.Item className='text-center w-100 '>
          <div className='sliderImg '>
            <img
        className="d-block max-width-100  "
        src={img}
        alt="First slide"
        
      />
          </div>
      
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
      ))
    }

   
  </Carousel>

  )
}

export default Slider