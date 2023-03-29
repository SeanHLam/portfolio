import { useState } from 'react';
import Image from 'next/image';
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

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
    <div className="w-92 outline outline-dark drop-shadow-button p-5   bg-sand">
        
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
            <div className="embla__slide" key={index}>
            <img
                src={images[index]}
                alt={`Image ${index + 1}`}
          
            />
            </div>
        ))}
      
      </div>
    </div>
            
             
       {/* <div className="h-64">
        
        {images.map((image, index) => (
    
          <img
            key={index}
            src={images[index]}
      
            alt={`Image ${index + 1}`}
            className={`absolute inset-0 object-fit   ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            } transition-all duration-500`}
          />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/3 transform -translate-y-1/2 text-dark hover:text-light-blue"
        onClick={() => changeSlide(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4  }
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/3 transform -translate-y-1/2  text-dark hover:text-light-blue"
        onClick={() => changeSlide(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>  */}
    </div>
  );
}

export default ImageCarousel;