import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'; 

export default function Cert() {

    return (
        <div className="customWidth">
    <Carousel className="car custom-carousel-arrows" interval={null}>
      <Carousel.Item>
        <a href="https://www.freecodecamp.org/certification/vidyavuy/javascript-algorithms-and-data-structures-v8" target='_blank'>
        <img src="/Portfolio/Cert-1.png" className="d-block w-100"/>
        </a>
      </Carousel.Item>
      
      <Carousel.Item>
        <a href="https://www.freecodecamp.org/certification/fccda94dffa-71ee-4f74-a6c1-4df09177f4a1/responsive-web-design" target='_blank'>
        <img src="/Portfolio/Cert-2.png" className="d-block w-100"/>
         </a>
      </Carousel.Item>
    </Carousel> </div>
    )
}