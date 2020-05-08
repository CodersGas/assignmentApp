import React, {Component} from 'react';
import slide1 from '..//static/images/slide1.jpg';
import slide2 from '..//static/images/slide2.png';
import slide3 from '..//static/images/slide3.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ImageSlider2 extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={"https://cdn1.truelancer.com/upload-full/503718-8.png"} />
        </div>

        <div>
          <img src={"https://cdn1.truelancer.com/upload-full/503717-20.jpg"} />
        </div>

        <div>
          <img src="https://cdn1.truelancer.com/upload-full/503719-10.jpg" />
        </div>

        <div>
          <img src="https://cdn1.truelancer.com/upload-full/503720-15.jpg" />
        </div>

        <div>
          <img src="https://cdn1.truelancer.com/upload-full/503958-1.jpg" />
        </div>

        <div>
          <img src="https://cdn1.truelancer.com/upload-full/503959-26.jpg" />
        </div>

        <div>
          <img src="https://cdn1.truelancer.com/upload-full/503960-2a.jpg" />
        </div>

      <style jsx>{`
        div img {
          height: 350px;
        }
      `}</style>
      </Carousel>
    )
  }
}

export default ImageSlider2;