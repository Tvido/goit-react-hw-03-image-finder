import { Component } from 'react';
import PropTypes from 'prop-types';
import imageApi from './services/image-api';

import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import SearchBar from './components/Searchbar';

import './App.css';

class App extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    currentPage: PropTypes.number,
    searchQuery: PropTypes.string,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    showModal: PropTypes.bool,
    largeImageUrl: PropTypes.string,
    imageStatus: PropTypes.string,
  };

  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImg: '',
    imageStatus: 'loading',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImg: '' });
  };

  onImageClick = url => {
    this.setState({ largeImageURL: url });
    this.toggleModal();
    this.setState({ imageStatus: 'loading' });
  };

  onImageLoaded = () => {
    this.setState({ imageStatus: 'loaded' });
  };

  onOpenlargeImages = largeImageURL => {
    console.log(largeImageURL);
    this.setState({
      largeImg: largeImageURL,
      showModal: true,
    });
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
    const { images, showModal, isLoading, error, largeImg } = this.state;
    const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;

    return (
      <>
        <SearchBar onSubmit={this.onSearchQuery} />

        {isLoading && <h1>Loading...</h1>}

        {error && <h1>Something went wrong! Please, try again later</h1>}

        <ImageGallery
          images={images}
          onOpenLargeImages={this.onOpenLargeImages}
        />

        {shouldRenderLoadMoreBtn && (
          <Button type="button" onClick={this.fetchImages}>
            Load more
          </Button>
        )}

        {showModal && <Modal onClose={this.toggleModal} largeImg={largeImg} />}
      </>
    );
  }
}

export default App;
