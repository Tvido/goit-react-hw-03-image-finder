import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ id, webformatURL, onClick }) => (
  <li className="ImageGalleryItem" key={id} onClick={onClick}>
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
