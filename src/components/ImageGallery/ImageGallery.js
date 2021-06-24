import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ images, onOpenLargeImages }) => (
  <>
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, onClick }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          onClick={() => onOpenLargeImages(largeImageURL)}
        />
      ))}
    </ul>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  onOpenLargeImages: PropTypes.func,
  onClick: PropTypes.func,
};

export default ImageGallery;
