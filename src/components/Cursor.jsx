import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className='cursor'
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};

export default Cursor;
