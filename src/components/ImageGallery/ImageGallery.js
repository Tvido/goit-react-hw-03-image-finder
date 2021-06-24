import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ images, onOpenLargeImages }) => (
  <>
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageUrl, onClick }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          onClick={() => onOpenLargeImages(largeImageUrl)}
        />
      ))}
    </ul>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
};

export default ImageGallery;
