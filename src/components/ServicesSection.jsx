import React, { useState } from 'react';
import FancyText from '../assets/FancyText.png';
import WhaleCircle from '../assets/WhaleCircle.png';

function ServicesSection() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [rotationDegree, setRotationDegree] = useState(0);

  const handleHover = (degree) => {
    if (degree !== null) {
      setHoveredItem(degree);
      setRotationDegree(degree);
    }
  };
  
  return (
    <div className="services-section-wrapper mt-28 mb-8">
      <div className="relative">
        <img src={FancyText} alt="Fancy Text" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-56" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img
            src={WhaleCircle}
            alt="Whale Circle"
            className="w-96 h-96 transition-transform duration-500 transform rotate-[${rotationDegree}deg]"
            style={{ transform: `rotate(${rotationDegree}deg)` }}
          />
        </div>

        <div className="flex justify-center items-center relative z-30">
          <div className="mr-6">
            <div className="group-container mb-16 mr-96 ml-4">
              <div>
                <div
                  className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-56 h-36 bg-cyan-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-cyan-300"
                  onMouseEnter={() => handleHover(270)}
                  onMouseOut={() => handleHover(null)}
                >
                  <img src="https://jetpackme.files.wordpress.com/2023/07/social-media-photographer.png?w=840" alt="Photographers" className="w-16 h-16 rounded-full object-cover" />
                  <div className="text-cyan-900">
                    <span className="font-bold">Photographers</span>
                    <p className="line-clamp-2">Keep these memories forever!</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div
                  className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-56 h-36 bg-cyan-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-cyan-300"
                  onMouseEnter={() => handleHover(180)}
                  onMouseOut={() => handleHover(null)}
                >
                  <img src="https://thumbs.dreamstime.com/b/dining-room-buffet-aboard-luxury-abstract-cruise-ship-selective-focus-burgers-167647296.jpg" alt="Marine Grill" className="w-16 h-16 rounded-full object-cover" />
                  <div className="text-cyan-900">
                    <span className="font-bold">Marine Grill</span>
                    <p className="line-clamp-2">Have the best seafood!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-6">
            <div className="group-container mt-16">
              <div>
                <div
                  className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-56 h-36 bg-cyan-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-cyan-300"
                  onMouseEnter={() => handleHover(0)}
                  onMouseOut={() => handleHover(null)}
                >
                  <img src="https://img.cruisecritic.net/cms-sb/f/1005231/75be0d776c/epp_oyster_zuiderdam_holland-america-line_18342464.jpg?auto=compress%2Cformat&fp-z=1&h=532&w=818&ar=3%3A2&dpr=2.625&q=15&ixlib=react-9.0.2" alt="Music" className="w-16 h-16 rounded-full object-cover" />                
                  <div className="text-cyan-900">
                    <span className="font-bold">Music</span>
                    <p className="line-clamp-2">Tune into Sea Beats!</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div
                  className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-56 h-36 bg-cyan-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-cyan-300"
                  onMouseEnter={() => handleHover(90)}
                  onMouseOut={() => handleHover(null)}
                >
                  <img src="https://dancemagazine.com.au/wp-content/uploads/2017/09/The-Aussie-cast-members-on-Norwegian-Cruise-Lines-newest-ship-The-Joy.-Photo-courtesy-of-NCL..jpg" alt="Dancers" className="w-16 h-16 rounded-full object-cover" />
                  <div className="text-cyan-900">
                    <span className="font-bold">Dancers</span>
                    <p className="line-clamp-2">Dance Along the Sea!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;