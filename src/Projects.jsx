import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Project() {
    return (
        <div className="customWidth">
    <Carousel className="car custom-carousel-arrows" >
      <Carousel.Item>
        <a href="https://github.com/404Found2/react-todo-list" target='_blank'>
        <img src="/Portfolio/todo.png" className="d-block w-100"/>
        <Carousel.Caption className="text">
          <h3>To-Do List</h3>
          <p><span className="skills">Tech-Stack: React, CSS</span> <br/> This is a simple react app that allows users to add and delete tasks, saving changes by storing data via local starage.</p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>
      
      <Carousel.Item>
        <a href="https://github.com/404Found2/SimpliFood" target='_blank'>
        <img src="/Portfolio/simplifood.png" className="d-block w-100"/>
        <Carousel.Caption className="text">
          <h3>Simplifood</h3>
          <p><span className="skills">Tech-Stack: React, CSS</span> <br/> SimpliFood is a web application that helps users find recipes can solve this issue by suggesting meals, essentially becoming an online cookbook!</p>
        </Carousel.Caption>
         </a>
      </Carousel.Item>
    </Carousel> </div>
    )
}