import * as React from 'react';
import { useState , useRef } from 'react';
//import ImageList from '@mui/material/ImageList';
//import ImageListItem from '@mui/material/ImageListItem';
import front from "../../Components/Assets/front.jpg"
import top from "../../Components/Assets/top.jpg"
import both from "../../Components/Assets/both.jpg"
import box from "../../Components/Assets/box.jpg"
import './Item.css'

const MyComponent = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const duplicateImageRef = useRef(null);
  
    const handleImageClick = (imageName) => {
      setSelectedImage(imageName);
  
      // Remove the previous duplicate image if it exists
      if (duplicateImageRef.current) {
        duplicateImageRef.current.remove();
      }
  
      // Create a new image element for the duplicate
      const originalImage = document.getElementById(imageName);
      const duplicateImage = originalImage.cloneNode(true);
  
      // Apply additional styles to the duplicate image
      duplicateImage.classList.add('duplicate-image');
  
      // Append the duplicate image to the document body or any other container
      document.body.appendChild(duplicateImage);
  
      // Save the reference to the current duplicate image
      duplicateImageRef.current = duplicateImage;
    };
  
    return (
      <div className='image'>
        <img
          id="front"
          src={front}
          className={`my-image ${selectedImage === 'front' ? 'main-image' : ''}`}
          alt="Description of the front image"
          onClick={() => handleImageClick('front')}
        />
        <img
          id="top"
          src={top}
          className={`my-image ${selectedImage === 'top' ? 'main-image' : ''}`}
          alt="Description of the top image"
          onClick={() => handleImageClick('top')}
        />
        <img
          id="both"
          src={both}
          className={`my-image ${selectedImage === 'both' ? 'main-image' : ''}`}
          alt="Description of the both image"
          onClick={() => handleImageClick('both')}
        />
        <img
          id="box"
          src={box}
          className={`my-image ${selectedImage === 'box' ? 'main-image' : ''}`}
          alt="Description of the box image"
          onClick={() => handleImageClick('box')}
        />
      </div>
    );
  };
  
  export default MyComponent;