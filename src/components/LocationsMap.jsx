import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Map from '../assets/Map.png';
import Loc1 from '../assets/LocPins/Loc1.png';
import Loc2 from '../assets/LocPins/Loc2.png';
import Loc3 from '../assets/LocPins/Loc3.png';
import Loc4 from '../assets/LocPins/Loc4.png';
import Loc5 from '../assets/LocPins/Loc5.png';
import FancyText from '../assets/LocFancy.png'

const LocationsMap = () => {
  const loc1Ref = useRef(null);
  const loc2Ref = useRef(null);
  const loc3Ref = useRef(null);
  const loc4Ref = useRef(null);
  const loc5Ref = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const loc1 = loc1Ref.current;
      const loc2 = loc2Ref.current;
      const loc3 = loc3Ref.current;
      const loc4 = loc4Ref.current;
      const loc5 = loc5Ref.current;

      const elements = [loc1, loc2, loc3, loc4, loc5];
      elements.forEach(async (element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
          if (isInViewport) {
            await controls.start({ y: [-10, 10, -10, 0], transition: { duration: 2, ease: "easeInOut" } });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
    <img src={FancyText}/>
    <div className="locations-map">
      <style>{`
        .locations-map {
          display: flex;
          justify-content: center;
          align-items: center; 
        }
        
        .map {
          position: relative;
        }

        
        .location-pin {
          position: absolute;
          transform-origin: bottom center;
        }

        .pin-image {
          width: 80px; /* Increased pin size */
          height: 80px; /* Increased pin size */
          border-radius: 50%;
          overflow: hidden;
        }
        
        .pin-image img {
          width: 100%;
          height: 100%;
        }
        
        .pin-label {
          position: absolute;
          top: calc(100% + 5px); /* Adjust distance between pin and label */
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
        }
      `}</style>

      <div className="map">
        <img src={Map} alt="Map" className="w-110 h-auto"/>

        {/* Location Pin 1 */}
        <motion.div
          ref={loc1Ref}
          className="location-pin"
          style={{ top: '50%', left: '67.5%', transform: 'translate(-50%, -50%)' }}
          animate={controls}
        >
          <div className="pin-image">
            <img src={Loc1} alt="Location" />
          </div>
          <div className="pin-label text-cyan-900">Mirrisa, Sri Lanka</div>
        </motion.div>

        {/* Location Pin 2 */}
        <motion.div
          ref={loc2Ref}
          className="location-pin"
          style={{ top: '65%', left: '53%', transform: 'translate(-50%, -50%)' }}
          animate={controls}
        >
          <div className="pin-image">
            <img src={Loc2} alt="Location" />
          </div>
          <div className="pin-label text-cyan-900">Hermanus, South Africa</div>
        </motion.div>

        {/* Location Pin 3 */}
        <motion.div
          ref={loc3Ref}
          className="location-pin"
          style={{ top: '30%', left: '34.5%', transform: 'translate(-50%, -50%)' }}
          animate={controls} 
        >
          <div className="pin-image">
            <img src={Loc3} alt="Location" />
          </div>
          <div className="pin-label text-cyan-900">Azores, Portugal</div>
        </motion.div>

        {/* Location Pin 4 */}
        <motion.div
          ref={loc4Ref}
          className="location-pin"
          style={{ top: '50%', left: '7%', transform: 'translate(-50%, -50%)' }}
          animate={controls}
        >
          <div className="pin-image">
            <img src={Loc4} alt="Location" />
          </div>
          <div className="pin-label text-cyan-900">Maui, Hawaii</div>
        </motion.div>

        <motion.div
          ref={loc5Ref}
          className="location-pin"
          style={{ top: '75%', left: '8%', transform: 'translate(-50%, -50%)' }}
          animate={controls} 
        >
          <div className="pin-image">
            <img src={Loc5} alt="Location" />
          </div>
          <div className="pin-label text-cyan-900">Moorea Island, French Polynesia</div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default LocationsMap;