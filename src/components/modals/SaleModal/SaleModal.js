import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import { useWeb3Context } from '../../../Context/Web3Context';
import { offerBearForSale } from '../../../hooks/contractActions';
import {
  Button,
  FormControl,
  Heading4,
  Info,
  Input,
  Label,
  SecondaryButton,
} from '../../lib';
import Modal from '../Modal/Modal';

const SaleModal = ({ show, handleCloseModal, bear, onSuccess }) => {
  const { account, library } = useWeb3React();
  const {
    state: { contract },
  } = useWeb3Context();
  const [price, setPrice] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setError('');
  }, []);

  const handleOfferForSale = async e => {
    e.preventDefault();
    setError('');
    if (!price || +price < 0) {
      setError('Please insert correct a value');
      return;
    }
    if (!price || +price < 0.00001) {
      setError('Price should be greater than 0.00001');
      return;
    }
    try {
      setLoading(true);
      await offerBearForSale(+bear.index, price, contract, account)
        .then(onSuccess)
        .catch(() => setLoading(false));
      setLoading(false);
    } catch (methodError) {
      setLoading(false);
      throw new Error(methodError.message);
    }
    setPrice('');
  };

  return (
    <Modal showModal={show} handleCloseModal={handleCloseModal}>
      <Heading4>Offer bear #{bear?.index}</Heading4>
      <form onSubmit={handleOfferForSale}>
        <FormControl>
          <Label htmlFor="min-price">
            What&apos;s the min price yo would like to sell this bear? (in BNB)
          </Label>
          <Input
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
            placeholder="Price in BNB"
            name="min-price"
            id="min-price"
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
            onClick={() => handleCloseModal()}
          >
            Cancel
          </Button>
          <SecondaryButton
            size="small"
            className="mt-2"
            isLoading={loading}
            disabled={loading}
            type="submit"
          >
            Offer
          </SecondaryButton>
        </Actions>
      </form>
    </Modal>
  );
};

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default SaleModal;
