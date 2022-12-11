import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nocturna from '../../assets/img/nocturna.png'
import Planetario from '../../assets/img/Planetario.png'
import Reapertura from '../../assets/img/reapertura.png'


function CarouselComponent() {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Nocturna}
          width={600}
          height={600}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Planetario}
          width={600}
          height={600}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Reapertura}
          width={600}
          height={600}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;