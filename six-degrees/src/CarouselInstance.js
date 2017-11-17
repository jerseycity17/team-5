import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Carousel} from 'react-bootstrap';
var Alert = require('react-bootstrap').Alert;


const CarouselInstance = function (props){
  return(
  <Carousel>
    <Carousel.Item>
      <img width={1300} height={500} alt="900x500" src="https://clients.matrixgroup.net/images/matrix-group-international.png?sfvrsn=2" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1300} height={500} alt="900x500" src="https://logos-download.com/wp-content/uploads/2016/04/logo_gray.png" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1300} height={500} alt="900x500" src="http://f089628753bf8b3a1fed-d23387a926daa830f4d87a8007cc5744.r28.cf4.rackcdn.com/uploads/ambassador/1/17/pHCWAKZKztJlh.png" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1300} height={500} alt="900x500" src="https://media.licdn.com/media/p/2/005/05b/376/34d93a4.png" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default CarouselInstance;
