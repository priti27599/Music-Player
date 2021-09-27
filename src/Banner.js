import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/5.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg'


function Banner() {
  return (
    <div className="banner" style={{ marginTop: "20px" }}>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '575px', width: '80vw' }}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Music Player</h3>
            <p>All type of music Avaliable</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '575px', width: '80vw' }}
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Music Player</h3>
            <p>All type of music Avaliable</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '575px', width: '80vw' }}
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Music Player</h3>
            <p>All type of music Avaliable</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
