import React from 'react';
import image from '../../../assets/image.png';
import './photo.css';
const FixedImageComponent = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black editImage ">
      <div className="pt-20 ">
        <div className="flex justify-center items-center px-4 ">
          <div className="w-full max-w-7xl ">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black images">
              <img
                src={image}
                alt="Beautiful landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedImageComponent;