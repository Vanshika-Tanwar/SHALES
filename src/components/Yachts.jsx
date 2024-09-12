import React, { useRef, useEffect, useState } from 'react';
import TopYachts from '../assets/TopYachts.png';
import Wave from '../assets/wave.png';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const yachts = [
  { id: 1, name: 'Flying Fox', price: '$4,272,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/k93df7b03/vessel/resource/1116405.jpg' },
  { id: 2, name: 'Kismet', price: '$3,00,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/k24b6d634/vessel/resource/2645070.jpg' },
  { id: 3, name: 'Ahpo', price: '$2,771,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/k3ad7f98a/vessel/resource/1956504.jpg' },
  { id: 4, name: 'Lady S', price: '$1,492,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/k3d39f5b1/vessel/resource/1696434.jpg' },
  { id: 5, name: 'Maltese Falcon', price: '$4,90,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/ka2e9d540/vessel/resource/2269828.jpg' },
  { id: 6, name: 'Project X', price: '$1,172,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/kce7c3dd4/vessel/resource/2103547.jpg' },
  { id: 7, name: 'La Datcha', price: '$7,40,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/k3548f759/vessel/resource/1435835.jpg' },
  { id: 8, name: 'Andrea', price: '$9,72,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/kd3717177/vessel/resource/2373213.jpg' },
  { id: 9, name: 'Titania', price: '$6,15,000', image: 'https://image.yachtcharterfleet.com/w351/h251/q90/ca/ow-1/k0eb88922/vessel/resource/662603.jpg' },
  { id: 10, name: 'Eternity', price: '$7,56,000', image: 'https://image.yachtcharterfleet.com/w348/h218/qh/ca/kd35313a3/review/overview/2292885.jpg' },
];

const Yachts = () => {
  const scrollRef = useRef(null);
  const topYachtsRef = useRef(null);
  const [topYachtsVisible, setTopYachtsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTopYachtsVisible(true);
        }
      });
    }, options);

    if (topYachtsRef.current) {
      observer.observe(topYachtsRef.current);
    }

    return () => {
      if (topYachtsRef.current) {
        observer.unobserve(topYachtsRef.current);
      }
    };
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 310;
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 310;
    }
  };

  return (
    <div>
      <style>
        {`
          @keyframes riseUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <img src={TopYachts} alt="Sailing Favourites" ref={topYachtsRef} className={`opacity-0 transition-opacity duration-1000 ease-in-out ${topYachtsVisible ? 'opacity-100' : ''}`} />
      <div className="mx-4 sm:mx-40 relative">
        <div className="flex p-4 w-full overflow-hidden">
          <div className="absolute left-0 top-0 flex items-center h-full z-10">
            <button onClick={scrollLeft} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <IoIosArrowBack />
            </button>
          </div>
          <div ref={scrollRef} className="flex space-x-8 overflow-x-auto" style={{ overflowY: 'hidden', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', animation: 'riseUp 0.5s ease forwards', minWidth: '100%' }}>
            {yachts.map((yacht) => (
              <div key={yacht.id} className="card relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:rotate-1" style={{ minWidth: '280px', animation: 'slideInUp 0.5s ease forwards' }}>
                <img src={yacht.image} alt={yacht.name} className="w-full h-64 object-cover" style={{ height: '250px' }} />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{yacht.name}</h2>
                  <p className="text-gray-600">{yacht.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 flex items-center h-full z-10">
            <button onClick={scrollRight} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <img src={Wave} alt="" />
    </div>
  );
};

export default Yachts;