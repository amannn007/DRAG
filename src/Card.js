import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import Modal from 'react-modal';
import 'react-resizable/css/styles.css';

Modal.setAppElement('#root');

const Card = ({ text }) => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const halfText = text.substring(0, Math.floor(text.length / 2));

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Draggable
      handle=".card-header"
      defaultPosition={{ x: 0, y: 0 }}
    >
      <div>
        <ResizableBox
          width={250}
          height={200}
          minConstraints={[150, 150]}
          maxConstraints={[500, 500]}
          resizeHandles={['se']}
          className="resizable-box"
        >
          <div className="card">
            <div className="card-header">
              <h4>Drag Me</h4>
            </div>
            <p>{showMore ? text : `${halfText}...`}</p>
            <button onClick={showMore ? closeModal : openModal}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </ResizableBox>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Detailed Text"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>Full Text</h2>
          <p>{text}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </Draggable>
  );
};

export default Card;
