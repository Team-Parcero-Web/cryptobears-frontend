import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import {
  Container,
  Heading3,
  Heading4,
  PurpleLine,
  GreyLine,
  Label,
  Spinner,
} from "../../components/lib";
import styled from "styled-components";
import { client } from "../../api/client";
import { useWeb3Context } from "../../Context/Web3Context";
import Skeleton from "react-loading-skeleton";

const BearDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [bear, setBear] = React.useState();
  const [owner, setOwner] = React.useState("");
  const [bearSales, setBearStales] = React.useState({});
  const [bearBids, setBearBids] = React.useState({});

  const {
    state: { contract },
  } = useWeb3Context();

  React.useEffect(() => {
    if (id) {
      client(`bears/?index=${id}`).then((data) => setBear(data[0]));

      contract?.methods
        .bearBids(id)
        .call()
        .then((data) => setBearBids(data));

      contract?.methods
        .bearsOfferedForSale(id)
        .call()
        .then((data) => setBearStales(data));

      contract?.methods
        .bearIndexToAddress(id)
        .call()
        .then((data) => setOwner(data));
    }
  }, [id]);

  return (
    <Layout>
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
                    <Skeleton circle={true} height={120} width={120} />
                  )}
                </div>
                <Heading4 center className="bear-name">
                  Bear # {id}
                </Heading4>
                <GreyLine />
                <Label className="mt-5 bold">Has Bids?</Label>
                <p className="text-2">{bearBids.hasBid ? "Yes" : "No"}</p>

                <Label className="mt-3 bold">Is for sale?</Label>
                <p className="text-2">{bearSales.isForSale ? "Yes" : "No"}</p>
              </div>
            </ProfileLeft>
            <ProfileRight>
              <PurpleLine />

              <div className="pink">
                <Label className="breadcumb">Bears / Bear #{id}</Label>
              </div>

              <div className="grey">
                <Heading3>Bear Details</Heading3>

                <Label className="mt-2">Owner: {owner || <Skeleton width={200} />}</Label>
                <Label className="mt-5 bold">Highest bid:</Label>
                <p className="text-2">
                  {bearBids.value ? (
                    +bearBids.value / 1000000000000000000
                  ) : (
                    <Skeleton width={100} />
                  )}
                </p>
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
