import React, { useEffect, useState } from 'react';
import './presentation.css'; // Import your CSS file
import imageSrc from '../images/fio-removebg-preview.png';
import Navbar from './navbar';

const PresentationPage = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Set a timeout to redirect after 5 seconds
    const redirectTimeout = setTimeout(() => {
      setRedirect(true);
    }, 2000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="presentation-container">
      {redirect ? (
        <Navbar/>
      ) : (
        <div className="centered-image">
          <img src={imageSrc} alt="Centered Image" />
        </div>
      )}
    </div>
  );
};

export default PresentationPage;