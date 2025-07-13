import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-6  top-0 bg-opacity-80 backdrop-blur-md z-50">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className="flex flex-shrink-0 items-center"
      >
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="m-8 mt-0 flex items-center gap-4 text-4xl text-white"
      >
        <a href="https://www.linkedin.com/in/karthikeyan-pakeer-b5432032b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://github.com/karthikeyan2535" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-colors" />
        </a>

      </motion.div>
    </nav>
  );
};

export default Navbar;
