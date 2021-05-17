import React from 'react';
import styled from 'styled-components';
import {
  checkWithdraws,
  withdraw,
  fromWei,
} from '../../../hooks/contractActions';
import { Button, Heading3, Info } from '../../lib';
import Modal from '../Modal/Modal';

const PendingWithdraws = ({ show, handleCloseModal, account, contract }) => {
  const [pending, setPending] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  React.useEffect(() => {
    try {
      setLoading(true);
      if (account && contract && show) {
        checkWithdraws(account, contract).then(data => {
          setLoading(false);
          setPending(data);
        });
      }
    } catch (methodError) {
      setLoading(false);
      throw new Error(methodError.message);
    }
    setPending('');
  }, [account, contract, show]);

  return (
    <Wrapper>
      <Modal
        showModal={show}
        handleCloseModal={handleCloseModal}
        modalClassName="pending-modal"
      >
        <Heading3>Pending withdraws</Heading3>
        <Info size="2" className="mt-1 info">
          {loading && 'Loading...'}
          {!loading &&
            (+pending > 0
              ? `Your pending withdraws are ${fromWei(pending)}`
              : "You don't have any pending withdraws")}
        </Info>
        {+pending > 0 && (
          <div className="button-wrapper">
            <Button
              className="mt-2"
              isLoading={loading}
              disabled={loading}
              onClick={async () => {
                await setLoading(true);
                withdraw(contract, account).then(data => {
                  if (data) {
                    handleCloseModal();
                    setShowSuccessModal(true);
                    setLoading(false);
                    checkWithdraws(account, contract).then(
                      pendingDataAfterWithdraw => {
                        setPending(pendingDataAfterWithdraw);
                      },
                    );
                  } else {
                    setLoading(false);
                  }
                });
              }}
            >
              Withdraw
            </Button>
          </div>
        )}
      </Modal>
      <Modal
        showModal={showSuccessModal}
        handleCloseModal={() => {
          setShowSuccessModal(false);
        }}
      >
        <Heading3>Success!</Heading3>
        <Info size="2" className="mt-2">
          You&apos;ve succesfully withdraw your pending funds
        </Info>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .pending-modal {
    min-width: 600px;
  }
  .info {
    text-align: left;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export default PendingWithdraws;
