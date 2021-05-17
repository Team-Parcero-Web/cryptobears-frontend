import React from 'react';
import { useWeb3React } from '@web3-react/core';
import styled from 'styled-components';
import { useWeb3Context } from '../../../Context/Web3Context';
import {
  Button,
  FormControl,
  Heading4,
  Input,
  Label,
  SecondaryButton,
  Info,
  Heading3,
} from '../../lib';
import Modal from '../Modal/Modal';
import { fromWei, toWei } from '../../../hooks/contractActions';

const BidModal = ({ show, handleCloseModal, bear, onSuccess, currentBid }) => {
  const { account } = useWeb3React();
  const {
    state: { contract },
  } = useWeb3Context();
  const [price, setPrice] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  React.useEffect(() => {
    setError('');
  }, []);

  const handleOfferBid = async e => {
    e.preventDefault();
    setError('');
    if (!price || +price < 0) {
      setError('Please insert correct a value');
      return;
    }
    if (+price < fromWei(currentBid)) {
      setError(`Bid must be higher than current bid (${fromWei(currentBid)}) `);
      return;
    }
    try {
      setLoading(true);
      await contract.methods
        .enterBidForBear(+bear.index)
        .send({ from: account, value: toWei(price) })
        .then(() => {
          setShowSuccessModal(true);
          handleCloseModal();
          onSuccess();
        })
        .catch(() => setLoading(false));
      setLoading(false);
    } catch (methodError) {
      setLoading(false);
      throw new Error(methodError.message);
    }
    setPrice('');
  };

  return (
    <>
      <Modal showModal={show} handleCloseModal={handleCloseModal}>
        <Heading4>Place a bid top bear #{bear?.index}</Heading4>
        <form onSubmit={handleOfferBid}>
          <FormControl>
            <Label htmlFor="min-price">
              Insert the value of your bid in BNB
            </Label>
            <Input
              value={price}
              onChange={e => setPrice(e.target.value)}
              type="number"
              placeholder="Price in BNB"
              name="min-price"
              id="min-price"
              autoComplete="off"
            />
          </FormControl>
          {error && (
            <Info className="error mt-1" size="2">
              {error}
            </Info>
          )}
          <Actions>
            <Button
              size="small"
              className="mt-2 mr-1"
              disabled={loading}
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <SecondaryButton
              size="small"
              className="mt-2"
              isLoading={loading}
              disabled={loading}
              type="submit"
              onClick={handleOfferBid}
            >
              Place bid for bear # {bear?.index}
            </SecondaryButton>
          </Actions>
        </form>
      </Modal>
      <Modal
        showModal={showSuccessModal}
        handleCloseModal={() => setShowSuccessModal(false)}
      >
        <Heading3>Success!</Heading3>
        <Info size="2" className="mt-2">
          Bid succesfully offered to Bear # {bear?.index}
        </Info>
      </Modal>
    </>
  );
};

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default BidModal;
