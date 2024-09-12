import React, { useEffect } from 'react';
import WhaleSection from '../components/WhaleSection';
import Mid from '../components/Mid';
import Yachts from '@/components/Yachts';
import LocationsMap from '@/components/LocationsMap';
import ServicesSection from '@/components/ServicesSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQ from '@/components/FAQ';

function Home() {
  return (
    <>
      <WhaleSection />
      <Mid />
      <AnimateSection component={<Yachts />} />
      <ServicesSection />
      <AnimateSection component={<LocationsMap />} />
      <FAQ />
    </>
  );
}

function AnimateSection({ component }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1 }}
      style={{ width: '100%', height: '100vh' }} 
    >
      {component}
    </motion.div>
  );
}

export default Home;