import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { client } from '../api/client';
import BearCard from '../components/BearCard/BearCard';
import Layout from '../components/Layout/Layout';
import {
  Button,
  Container,
  Heading2,
  Heading3,
  Label,
} from '../components/lib';
import PendingWithdraws from '../components/modals/PendingWithdraws/PendingWithdraws';
import { useWeb3Context } from '../Context/Web3Context';
import useWindowSize from '../hooks/useWindowSize';

const MyProfile = () => {
  const { account, activate } = useWeb3React();
  const { width: windowWidth } = useWindowSize();
  const {
    injected,
    state: { isLoggedIn, contract },
  } = useWeb3Context();
  const router = useRouter();
  const [myBears, setMyBears] = React.useState([]);
  const [bears, setBears] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState('false');

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

  const closeModal = () => setActiveModal('');

  return (
    <Layout>
      <Container className="container">
        <Inner>
          <PendingWithdraws
            show={activeModal === 'withdraws'}
            handleCloseModal={closeModal}
            account={account}
            contract={contract}
          />
          <Heading2>My Profile</Heading2>
          <Heading3 className="account">{account}</Heading3>
          <Button
            className="mt-2"
            onClick={async () => {
              setActiveModal('withdraws');
            }}
          >
            Check pending withdraws
          </Button>
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
              <Link href={`bears/${bear.index}`} key={bear.index}>
                <a href="/get-bear">
                  <BearCard
                    bear={bear}
                    key={bear.index}
                    mobile={windowWidth < 700}
                  />
                </a>
              </Link>
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
