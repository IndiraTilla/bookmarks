import React, { useState } from 'react';
import bookmarkIcon from './bookmark.png'; // Import the bookmark icon

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
          <img src={bookmarkIcon} alt="Bookmark" width="70px"/> // Use as image source
        ) : (
          <img src={bookmarkIcon} alt="Bookmark"  width="100px"/>
          // Or embed as SVG component: <BookmarkIcon />
        )}
      </button>
    </div>
  );
};

export default ImageWithBookmark;
