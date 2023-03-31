import { useState } from 'react';
import Image from 'next/image';
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ImageGallery from 'react-image-gallery';


function ImageCarousel({
    images = [
        'image-1.jpg',
        'image-2.jpg',
        'image-3.jpg',
        'image-4.jpg',
      ]
    }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function changeSlide(direction) {
    setActiveIndex((prevIndex) =>
      (prevIndex + direction + images.length) % images.length
    );
  }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])
 

 
  return (
    <div className="w-60 h-11/12 md:w-11/12  xl:w-11/12 outline outline-dark drop-shadow-button mb-8  bg-sand">
         
      <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images}/>


    
    </div>
  );
}

export default ImageCarousel;