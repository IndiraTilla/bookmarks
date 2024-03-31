import React from 'react';
import ImageWithBookmark from './ImageWithBookmark'; 
import image1 from './reg-ten.jpg';
import image2 from './reg-ten.jpg';
import image3 from './reg-ten.jpg';
import image4 from './reg-ten.jpg';
import image5 from './reg-ten.jpg';

const images = [image1, image2, image3, image4, image5];

const App = () => {
  return (
    <div>
      <h1>My Image Gallery</h1>
      {images.map((image, index) => (
        <ImageWithBookmark key={index} src={image} />
      ))}
    </div>
  );
};

export default App;
