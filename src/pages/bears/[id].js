import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { client } from '../../api/client';
import Layout from '../../components/Layout/Layout';
import {
  Button,
  Container,
  GreyLine,
  Heading3,
  Heading4,
  Info,
  Label,
  PurpleLine,
  SecondaryButton,
} from '../../components/lib';
import BidModal from '../../components/modals/BidModal/BidModal';
import Modal from '../../components/modals/Modal/Modal';
import QuitSaleModal from '../../components/modals/QuitSaleModal/QuitSaleModal';
import SaleModal from '../../components/modals/SaleModal/SaleModal';
import { useWeb3Context } from '../../Context/Web3Context';
import {
  checkBearBidStatus,
  checkBearSaleStatus,
  getBearOwner,
} from '../../hooks/contractActions';
import addBNB from '../../utils/addBNB';

const BearDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [bear, setBear] = React.useState();
  const [owner, setOwner] = React.useState('');
  const [bearSales, setBearSales] = React.useState({});
  const [bearBids, setBearBids] = React.useState({});
  const [activeModal, setActiveModal] = React.useState('');

  const { library, chainId, activate, account } = useWeb3React();
  const {
    injected,
    state: { contract },
  } = useWeb3Context();

  React.useEffect(() => {
    if (id && chainId === +process.env.NEXT_PUBLIC_CHAIN_ID) {
      client(`bears/?index=${id}`).then(data => setBear(data[0]));
      checkBearBidStatus(id, contract).then(setBearBids);
      checkBearSaleStatus(id, contract).then(setBearSales);
      getBearOwner(id, contract).then(setOwner);
    }
  }, [id, contract, chainId]);

  const closeModal = () => setActiveModal('');

  return (
    <Layout>
      <Modal
        showModal={chainId !== +process.env.NEXT_PUBLIC_CHAIN_ID}
        setShowModal={() => {}}
      >
        <p className="text-3"> Please Change to BNB SmartChain</p>
        <div>
          <Link href="/">
            <a href="/">
              <SecondaryButton size="small" className="text-2 mt-2 mr-1">
                Return to home
              </SecondaryButton>
            </a>
          </Link>
          <Button
            size="small"
            className="text-2 mt-2"
            onClick={async () => addBNB(library, activate, injected)}
          >
            Add BNB SmartChain
          </Button>
        </div>
      </Modal>

      <SaleModal
        show={activeModal === 'sale'}
        handleCloseModal={closeModal}
        bear={bear}
        onSuccess={() => {
          setActiveModal('success');
          checkBearSaleStatus(id, contract).then(setBearSales);
        }}
      />
      <Modal
        showModal={activeModal === 'success'}
        handleCloseModal={closeModal}
      >
        <Heading3>Success!</Heading3>
        <Info size="2" className="mt-2">
          Bear # {bear?.index} succesfully offered to sale
        </Info>
      </Modal>

      <QuitSaleModal
        show={activeModal === 'quitSale'}
        handleCloseModal={closeModal}
        bear={bear}
        contract={contract}
        account={account}
        onSuccess={async () => {
          checkBearSaleStatus(id, contract).then(setBearSales);
        }}
      />

      <BidModal
        show={activeModal === 'bid'}
        handleCloseModal={closeModal}
        bear={bear}
      />

      <Container>
        <Inner>
          <BearDetailLayout>
            <ProfileLeft>
              <div className="pink" />
              <div className="grey">
                <div className="bear-img-wrapper">
                  {bear ? (
                    <img src={bear?.image} alt="Bear" className="bear-img" />
                  ) : (
                    <Skeleton circle height={120} width={120} />
                  )}
                </div>
                <Heading4 center className="bear-name">
                  Bear # {id}
                </Heading4>
                <GreyLine />
                <Label className="mt-5 bold">Has Bids?</Label>
                <p className="text-2">{bearBids.hasBid ? 'Yes' : 'No'}</p>

                <Label className="mt-3 bold">Is for sale?</Label>
                <p className="text-2">{bearSales.isForSale ? 'Yes' : 'No'}</p>
              </div>
            </ProfileLeft>
            <ProfileRight>
              <PurpleLine />

              <div className="pink">
                <Label className="breadcumb">Bears / Bear #{id}</Label>
              </div>

              <div className="grey">
                <Heading3>Bear Details</Heading3>

                <Label className="mt-2">
                  Owner: {owner || <Skeleton width={200} />}
                </Label>
                <Label className="mt-5 bold">Highest bid:</Label>
                <p className="text-2">
                  {bearBids.value ? (
                    `${+bearBids.value / 1000000000000000000} BNB`
                  ) : (
                    <Skeleton width={100} />
                  )}
                </p>
                {bearSales.isForSale && owner !== account && (
                  <Button
                    className="mt-3"
                    onClick={() => {
                      setActiveModal('bid');
                    }}
                  >
                    Place bid
                  </Button>
                )}

                {!bearSales.isForSale && owner === account && (
                  <Button
                    className="mt-3 mr-3"
                    onClick={() => {
                      setActiveModal('sale');
                    }}
                  >
                    Offer to sale
                  </Button>
                )}

                {bearSales.isForSale && owner === account && (
                  <Button
                    className="mt-3 mr-3"
                    onClick={() => {
                      setActiveModal('quitSale');
                    }}
                  >
                    Quit for sale
                  </Button>
                )}

                {bearBids.hasBid && owner === account && (
                  <Button
                    className="mt-3"
                    onClick={() => {
                      setActiveModal('quitSale');
                    }}
                  >
                    Accept bid
                  </Button>
                )}
              </div>
            </ProfileRight>
          </BearDetailLayout>
        </Inner>
      </Container>
    </Layout>
  );
};

const BearDetailLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-column-gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .pink {
    background-color: ${({ theme }) => theme.colors.pink};
    height: 10rem;
  }
  .grey {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    padding: 1rem;
    position: relative;
  }
`;
const ProfileLeft = styled.div`
  .grey {
    padding-top: 11rem !important;
    padding: 2rem;
  }
  .bear-img-wrapper {
    width: 150px;
    height: 150px;
    overflow: hidden;
    background-color: white;
    display: grid;
    place-content: center;
    object-fit: cover;
    position: absolute;
    border: 5px solid white;
    border-radius: 50%;
    top: -75px;
    right: 50%;
    transform: translateX(50%);
  }
  .bear-img {
    min-width: 200px;
    margin-bottom: 50px;
  }

  .bear-name {
    margin-bottom: 2rem;
  }
`;
const ProfileRight = styled.div`
  position: relative;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
  .pink {
    display: flex;
    align-items: center;
    padding: 0 3rem;
    .breadcumb {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  .grey {
    padding: 2rem 3rem;
    word-break: break-all;
    white-space: pre-line;
  }
`;

export default BearDetail;
