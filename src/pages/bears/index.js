import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { client } from '../../api/client';
import BearCard from '../../components/BearCard/BearCard';
import Layout from '../../components/Layout/Layout';
import {
  Container,
  GetButton,
  Heading2,
  Heading3,
  Spinner,
} from '../../components/lib';
import useWindowSize from '../../hooks/useWindowSize';
import { BearsGrid } from '../my-profile';

const Bears = () => {
  const [bears, setBears] = React.useState(null);
  const { width: windowWidth } = useWindowSize();

  React.useEffect(() => {
    client('bears/').then(data => {
      setBears(data);
    });
  }, []);

  return (
    <Layout>
      <Container>
        <BearsHeader>
          <Heading2>Claimed bears</Heading2>
          <Link href="/get-bear">
            <a href="/get-bear">
              <GetButton responsive>Befriend a bear</GetButton>
            </a>
          </Link>
        </BearsHeader>
        <BearsGrid className="mt-5 mb-4">
          {bears ? (
            bears.map(bear => (
              <Link href={`bears/${bear.index}`} key={bear.index}>
                <a href="/get-bear">
                  <BearCard
                    bear={bear}
                    key={bear.index}
                    mobile={windowWidth < 700}
                  />
                </a>
              </Link>
            ))
          ) : (
            <div>
              <Heading3>Loading</Heading3>
              <Spinner />
            </div>
          )}
        </BearsGrid>
      </Container>
    </Layout>
  );
};

const BearsHeader = styled.div`
  display: flex;
  margin: 3rem 0 5rem;
  align-items: center;
  justify-content: space-between;
`;

export default Bears;
