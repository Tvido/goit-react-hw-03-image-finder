import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ images, onOpenLargeImages }) => (
  <>
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
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
  children: PropTypes.node,
  // largeImageURL: PropTypes.func,
};

export default ImageGallery;
