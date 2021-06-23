import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ images, onClick }) => (
  <>
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, bigImageUrl, onClick }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          onClick={() => this.onClick(bigImageUrl)}
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
