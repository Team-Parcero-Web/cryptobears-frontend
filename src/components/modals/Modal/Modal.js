import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '-60vh' },
  visible: { y: '0' },
};

const Modal = ({ showModal, handleCloseModal, children, modalClassName }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <Backdrop
          variants={backdrop}
          aria-label="modal-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          onClick={e => {
            if (e.target.getAttribute('aria-label') === 'modal-backdrop') {
              handleCloseModal();
            }
          }}
        >
          <ModalWrapper
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={modalClassName}
          >
            {children}
          </ModalWrapper>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: grid;
  place-content: center;
`;

const ModalWrapper = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 90vw;
`;

export default Modal;
