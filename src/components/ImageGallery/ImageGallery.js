import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ images, onClick }) => (
  <>
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, bigImageUrl }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          onClick={() => onClick(bigImageUrl)}
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
