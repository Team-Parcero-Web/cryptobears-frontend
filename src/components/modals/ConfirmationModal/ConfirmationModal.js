import React from 'react';
import styled from 'styled-components';
import { Button, Heading3, Info, SecondaryButton } from '../../lib';
import Modal from '../Modal/Modal';

const ConfirmationModal = ({
  show,
  handleCloseModal,
  onAccept = null,
  title,
  message,
  successMessage,
  confirmText = 'Yes',
  onSuccess = () => {},
}) => {
  const [loading, setLoading] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  return (
    <Wrapper>
      <Modal
        showModal={show}
        handleCloseModal={handleCloseModal}
        modalClassName="modal"
      >
        <Heading3>{title}</Heading3>
        <Info size="2" className="mt-2 text-left">
          {message}
        </Info>
        <Button
          className="mr-1"
          size="small"
          onClick={handleCloseModal}
          disabled={loading}
          autoFocus
        >
          Cancel
        </Button>
        <SecondaryButton
          className="mt-2"
          size="small"
          isLoading={loading}
          disabled={loading}
          onClick={async () => {
            if (onAccept) {
              setLoading(true);
              onAccept()
                .then(() => {
                  setLoading(false);
                  setShowSuccessModal(true);
                  onSuccess();
                  handleCloseModal();
                })
                .catch(() => {
                  setLoading(false);
                });
            } else {
              onSuccess();
            }
          }}
        >
          {confirmText}
        </SecondaryButton>
      </Modal>
      <Modal
        showModal={showSuccessModal}
        handleCloseModal={() => {
          setShowSuccessModal(false);
        }}
        backdropClosable
      >
        <Heading3>Success!</Heading3>
        <Info size="2" className="mt-2">
          {successMessage}
        </Info>
        <Button
          className="mr-1 mt-2"
          size="small"
          onClick={() => {
            setShowSuccessModal(false);
          }}
          disabled={loading}
          autoFocus
        >
          Accept
        </Button>
      </Modal>
    </Wrapper>
  );
};

export default ConfirmationModal;

const Wrapper = styled.div`
  .modal {
    max-width: 600px;
    @media (max-width: 976px) {
      max-width: 95vw;
    }
  }
`;
