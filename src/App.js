import { Component } from 'react';

import Modal from './components/Modal';
import ButtonTmp from './components/Button';

import './App.css';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  render() {
    const { showModal } = this.state;
    return (
      <>
        {/* <button type="button" onClick={this.toggleModal}>
          Open
        </button> */}

        <ButtonTmp onClick={this.toggleModal}>Button</ButtonTmp>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello</h1>

            <p>lorem ipsum</p>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
