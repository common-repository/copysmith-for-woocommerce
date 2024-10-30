import React from 'react';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons//Close';
import ImageIcon from '@material-ui/icons/Image';

const ConfrimationModal = ({ product, closeModal, modalOpen }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalOpen}
      onClose={() => closeModal(true)}
      closeAfterTransition
      classes="cs-ai-modal-classes"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >

      <Fade in={modalOpen}>
        <div className="cs-ai-modal-wrapper">
          <div className="cs-ai-confrimation-modal">
            <div className="cs-ai-modal-image">
              <ImageIcon fontSize="large" />
            </div>
            <div className="cs-ai-modal-content">
              <h1 className="cs-ai-modal-title">
                Product Description Applied to <span className="cs-ai-modal-title-purple">{product.post_title}</span>
              </h1>
              <p>
                Your product description has automatically been updated. 
                { ' ' }<a href={`/?post_type=product&p=${product.ID}&preview=true`} target="_blank">Click here</a>
                { ' ' }to view the product.
              </p>
              <div>
                <button className="cs-ai-button cs-ai-button-small" onClick={() => closeModal()}>
                  Return to Products
                </button>
              </div>
            </div>
            <div className="cs-ai-close-button">
              <CloseIcon onClick={() => closeModal(true)} />
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ConfrimationModal;