import React from 'react';
import { Info, Heading3 } from '../../lib';
import Modal from '../Modal/Modal';
import { checkWithdraws } from '../../../hooks/contractActions';

const PendingWithdraws = ({ show, handleCloseModal, account, contract }) => {
  const [pending, setPending] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      setLoading(true);
      if (account && contract && show) {
        checkWithdraws(account, contract).then(data => setPending(data));
      }
      setLoading(false);
    } catch (methodError) {
      setLoading(false);
      throw new Error(methodError.message);
    }
    setPending('');
  }, [account, contract, show]);

  return (
    <Modal showModal={show} handleCloseModal={handleCloseModal}>
      <Heading3>Pending withdraws</Heading3>
      <Info size="2" className="mt-2">
        {loading && 'Loading...'}
        {+pending > 0
          ? `Your pending withdraws are ${pending}`
          : "You don't have any pending withdraws"}
      </Info>
    </Modal>
  );
};

export default PendingWithdraws;
