import { Component } from 'react';
import PropTypes from 'prop-types';
import imageApi from './services/image-api';
// import axios from 'axios';

import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import SearchBar from './components/Searchbar';
// import Loader from './components/Loader';

import './App.css';

class App extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    currentPage: PropTypes.number,
    searchQuery: PropTypes.string,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    showModal: PropTypes.bool,
    bigImageUrl: PropTypes.string,
    imageStatus: PropTypes.string,
  };

  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    bigImageUrl: '',
    imageStatus: 'loading',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImageClick = url => {
    this.setState({ bigImageUrl: url });
    this.toggleModal();
    this.setState({ imageStatus: 'loading' });
  };

  onImageLoaded = () => {
    this.setState({ imageStatus: 'loaded' });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onSearchQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    imageApi(options)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        return this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, showModal, isLoading, bigImageUrl, error } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.onSearchQuery} />

        {/* {isLoading && <h1>Loading...</h1>} */}

        {error && <h1>Something went wrong! Please, try again later</h1>}

        <ImageGallery images={images} onClick={this.toggleModal} />

        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages}>Load more</Button>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={bigImageUrl} alt="" onLoad={this.onImageLoaded} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
