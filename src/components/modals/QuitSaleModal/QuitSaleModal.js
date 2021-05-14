import React from 'react';
import { Button, Heading3, Info } from '../../lib';
import Modal from '../Modal/Modal';
import { quitBearSale } from '../../../hooks/contractActions';

const QuitSaleModal = ({
  show,
  handleCloseModal,
  bear,
  onSuccess,
  contract,
  account,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  return (
    <>
      <Modal showModal={show} handleCloseModal={handleCloseModal}>
        <Heading3>Remove sale</Heading3>
        <Info size="2" className="mt-2">
          Are you sure you want to remove bear #{bear?.index} from sale?
        </Info>
        <Button
          className="mt-2"
          isLoading={loading}
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            quitBearSale(bear.index, contract, account).then(() => {
              onSuccess();
              setLoading(false);
              setShowSuccessModal(true);
              handleCloseModal();
            });
          }}
        >
          Yes, remove it from sale
        </Button>
      </Modal>
      <Modal
        showModal={showSuccessModal}
        handleCloseModal={() => {
          setShowSuccessModal(false);
        }}
      >
        <Heading3>Success!</Heading3>
        <Info size="2" className="mt-2">
          Bear # {bear?.index} succesfully removed from sale
        </Info>
      </Modal>
    </>
  );
};

export default QuitSaleModal;
