import React from 'react';
import image from '../../../Assets/image.png';

const FixedImageComponent = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="w-screen h-screen">
        <div className="w-full h-full">
          <img
            src={image}
            alt="Beautiful landscape"
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default FixedImageComponent;