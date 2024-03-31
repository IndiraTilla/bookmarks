import React, { useState } from 'react';
import bookmarkIcon from './bookmark.png'; 

const ImageWithBookmark = ({ src }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="image-container">
      <img src={src} alt="Image" className="image" />
      <button onClick={toggleBookmark} className="bookmark-button">
        {bookmarked ? (
          <img src={bookmarkIcon} alt="Bookmark" width="70px"/> 
        ) : (
          <img src={bookmarkIcon} alt="Bookmark"  width="100px"/>
         <BookmarkIcon />
        )}
      </button>
    </div>
  );
};

export default ImageWithBookmark;
