import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import whale from '../assets/whale.jpg';

const riseUpAnimation = `
  @keyframes riseUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const WhaleSection = () => {
  return (
    <section
      className="flex items-center justify-center text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${whale})` }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center" style={{ animation: 'riseUp 0.5s ease-out' }}>
      <div className="max-w-lg text-cyan-100" style={{ textShadow: '3px 2px 2px black' }}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Beyond Dreams!</h1>
          <p className="text-lg lg:text-xl mb-8">
          Whales & their majestic forms rising from the sea create a magical moment, leaving a lasting impression of the ocean's wonders. Wait No More!
          </p>
        </div>
        <Link to="/log-in">
          <Button outline gradientDuoTone="cyanToBlue" pill>
            Sight a Whale!
          </Button>
        </Link>
      </div>
      <style>{riseUpAnimation}</style>
    </section>
  );
};

export default WhaleSection;