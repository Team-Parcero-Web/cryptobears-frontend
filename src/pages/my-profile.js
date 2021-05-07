import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { client } from '../api/client';
import BearCard from '../components/BearCard/BearCard';
import Layout from '../components/Layout/Layout';
import { Container, Heading2, Heading3, Label, Info } from '../components/lib';
import SaleModal from '../components/SaleModal/SaleModal';
import { useWeb3Context } from '../Context/Web3Context';
import Modal from '../components/Modal/Modal';

const MyProfile = () => {
  const { account, activate } = useWeb3React();
  const {
    injected,
    state: { isLoggedIn },
  } = useWeb3Context();
  const router = useRouter();
  const [myBears, setMyBears] = React.useState([]);
  const [bears, setBears] = React.useState([]);
  const [showSaleModal, setShowSaleModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [activeSaleBear, setActiveSaleBear] = React.useState({});

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [account, isLoggedIn, router]);

  React.useEffect(() => {
    if (!account) {
      return;
    }

    client(`bears/?owner=${account}`).then(data => {
      setBears(data);
      setMyBears(data);
    });
  }, [account]);

  React.useEffect(() => {
    if (isLoggedIn) {
      activate(injected);
    }
  }, [activate, injected, isLoggedIn]);

  return (
    <Layout>
      <Container className="container">
        <Inner>
          <SaleModal
            show={showSaleModal}
            setShow={setShowSaleModal}
            bear={activeSaleBear}
            onSuccess={() => {
              setShowSaleModal(false);
              setShowSuccessModal(true);
            }}
          />
          <Modal
            showModal={showSuccessModal}
            setShowModal={setShowSuccessModal}
          >
            <Heading3>Success!</Heading3>
            <Info size="2" className="mt-2">
              Bear # {activeSaleBear.index} succesfully offered to sale
            </Info>
          </Modal>

          <Heading2>My Profile</Heading2>
          <Heading3 className="account">{account}</Heading3>
          <ProfileGrid>
            <div>
              <Label size="2.5">Bears you own</Label>
              <Label size="2.5">{myBears.length}</Label>
            </div>
            <div>
              <Label size="2.5">Total Bears</Label>
              <Label size="2.5">{bears.length}</Label>
            </div>
          </ProfileGrid>
          <Heading3 className="mt-4">Your Bears:</Heading3>
          <BearsGrid>
            {myBears.map(bear => (
              <BearCard
                bear={bear}
                key={bear.index}
                isProfile
                onSaleClick={() => {
                  setActiveSaleBear(bear);
                  setShowSaleModal(true);
                }}
              />
            ))}
          </BearsGrid>
        </Inner>
      </Container>
    </Layout>
  );
};

const Inner = styled.div`
  margin-top: 2rem;
  .account {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
const ProfileGrid = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

export const BearsGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
export default MyProfile;
