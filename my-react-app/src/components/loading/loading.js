import React, { useEffect, useState } from 'react';
import './loading.css'; 
import imageSrc from '../../images/fio-removebg-preview.png';

const Loading = () => {


  return (
    <div className="presentation-container">

        <div className="centered-image">
          <img src={imageSrc} alt="Centered Image" />
        </div>
    </div>
  );
};

export default Loading;