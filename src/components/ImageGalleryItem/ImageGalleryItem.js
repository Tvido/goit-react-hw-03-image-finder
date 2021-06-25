import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onOpenLargeImages,
}) => (
  <li className="ImageGalleryItem" key={id}>
    <img
      src={webformatURL}
      alt=""
      className="ImageGalleryItemImage"
      onClick={() => onOpenLargeImages(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
