import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 pb-4 pt-8 ml-[64px]">
        <h2 className='pb-3 text-[#1F2937] text-neutral-600'><span className='text-xl text-neutral-600'>Note :</span>   The contact details provided are not accurate. If you wish to get in touch, please use the contact form.</h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">Vikas Padghan</h1>
          <p className="text-sm">&copy; 2024 Company Name. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <a href="#home" className="mx-2 text-sm hover:text-gray-400">Home</a>
          <a href="#about" className="mx-2 text-sm hover:text-gray-400">About</a>
          <a href="#services" className="mx-2 text-sm hover:text-gray-400">Services</a>
          <a href="#contact" className="mx-2 text-sm hover:text-gray-400">Contact</a>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="https://facebook.com" className="mx-2 hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="mx-2 hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="mx-2 hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
