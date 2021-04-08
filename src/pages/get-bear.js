import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { client } from "../api/client";
import Layout from "../components/Layout/Layout";
import { Button, Container, Heading2, Heading3, PurpleLine } from "../components/lib";
import { useWeb3Context } from "../Context/Web3Context";
import Confetti from "react-confetti";
import useWindowSize from "../hooks/useWindowSize";

const MyProfile = () => {
  const { account, activate, chainId } = useWeb3React();
  const {
    injected,
    state: { contract, value, isMetamask },
  } = useWeb3Context();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [bearIndex, setBearIndex] = React.useState("");
  const [bearImage, setBearImage] = React.useState("");
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    if (
      (!account && window.sessionStorage.getItem("isLoggedIn") === "false") ||
      !window.sessionStorage.getItem("isLoggedIn")
    ) {
      router.push("/login");
    }
  }, [account]);

  React.useEffect(() => {
    if (
      window.sessionStorage.getItem("isLoggedIn") &&
      window.sessionStorage.getItem("isLoggedIn") === "true"
    ) {
      activate(injected);
    }
  }, []);

  React.useEffect(() => {
    if (bearIndex) {
      client(`bears/?index=${bearIndex}`).then((data) => setBearImage(data[0].image));
    }
  }, [bearIndex]);

  async function getBear() {
    try {
      setLoading(true);
      setShowConfetti(false);
      await contract.methods
        .getBear()
        .send({ from: account, value })
        .then((data) => {
          setBearIndex(data.events.Assign.returnValues.bearIndex);
          setShowConfetti(true);
        })
        .catch(() => setLoading(false));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error.message);
    }
  }

  return (
    <Layout>
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={120} />}
      <Container>
        <Inner>
          <Heading2>Buy a bear (Series 1)</Heading2>
          {showConfetti && (
            <Heading2 className="success">Congrats! you've got bear number {bearIndex} !!</Heading2>
          )}
          <BuyGrid>
            <BuyLeft>
              <PurpleLine />
              <BuyHeading>Bear #{bearIndex || "???"}</BuyHeading>
              <BearImgWrapper>
                {!bearImage ? (
                  <img src="/images/buy-placeholder.jpeg" alt="Bear example" />
                ) : (
                  <img src={bearImage} alt="Bear example" />
                )}
              </BearImgWrapper>
              <PurpleHeader>READY FOR YOUR NEW FRIEND?</PurpleHeader>
            </BuyLeft>
            <BuyRight>
              <BuyHeading>Befriended bear</BuyHeading>
              <BuyDetails>
                <p className="price-title">Current price</p>
                <div>
                  <p className="bnb-price"> BNB 0.0375 </p>
                  <p className="usd-price">($10)</p>
                </div>
                <BuyButton
                  isLoading={loading}
                  disabled={loading || !isMetamask || chainId !== +process.env.NEXT_PUBLIC_CHAIN_ID}
                  onClick={getBear}
                >
                  BUY NOW
                </BuyButton>
                {loading && (
                  <p className="price-title mt-2">Hold on! your transaction is being processed</p>
                )}
                {(!isMetamask || !account) && (
                  <p className="price-title mt-2 error">
                    You need metamask extension and being logged in to get a bear
                  </p>
                )}
              </BuyDetails>
            </BuyRight>
          </BuyGrid>
          <BuyDescription>
            <p>
              The bear you are about to get is an <span>unique</span> friend that's ready to go have
              fun with you
            </p>
            <img className="gold-paw paw" src="/images/paw1.png" alt="Paw coin" />
            <img className="purple-paw paw" src="/images/paw2.png" alt="Paw coin" />
            <p>
              Each one of our furry pals is special in their own way, some have hobbies, <br /> some
              like dressing up, some even are royalty, but all of them want the same thing: to be
              your friend!
            </p>
          </BuyDescription>
        </Inner>
      </Container>
    </Layout>
  );
};

const Inner = styled.div`
  margin-top: 7rem;
  min-height: calc(100vh - 21rem);

  .success {
    color: ${({ theme }) => theme.colors.purple};
    text-align: center;
  }
`;
const BuyHeading = styled(Heading3)`
  background-color: ${({ theme }) => theme.colors.pink};
  padding: 2rem 3rem;
`;

const BuyGrid = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 7rem;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-column-gap: 1.4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BuyLeft = styled.div`
  position: relative;
`;
const BuyRight = styled.div`
  @media (max-width: 768px) {
    h1 {
      display: none;
    }
  }

  p {
    font-weight: 600;
  }
  .price-title {
    text-transform: uppercase;
    font-size: 1.4rem;
    margin: 0;
  }
  .bnb-price,
  .usd-price {
    display: inline;
  }
  .bnb-price {
    font-size: 3rem;
  }
  .usd-price {
    font-size: 1.4rem;
  }
`;

const BearImgWrapper = styled.div`
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  img {
    width: 300px;
    height: auto;
    padding: 2rem 1rem;
  }
`;

const PurpleHeader = styled.h3`
  background-color: ${({ theme }) => theme.colors.purple2};
  color: white;
  font-size: 1.6rem;
  padding: 2rem 1rem;
  text-align: center;
  margin-bottom: 0;
`;

const BuyDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 2rem 3rem;
  margin-top: 2rem;
`;

const BuyButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gold};
  color: white;
  padding: 1.6rem;
  width: 230px;
  border-radius: 7px;
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 1.4rem;

  &:hover,
  :active,
  :focus {
    background-color: ${({ theme }) => theme.colors.darkGold};
  }
`;

const BuyDescription = styled.div`
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: 3rem auto 1rem;
  padding: 1rem 4rem;
  border-radius: 10px;
  position: relative;

  padding: 1rem 4rem;

  .paw {
    position: absolute;
    top: 0;
    right: 0;
  }
  .gold-paw {
    width: 120px;
    top: -30%;
    right: 5%;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .purple-paw {
    width: 80px;
    top: 15%;
    right: -5%;
    @media (max-width: 768px) {
      width: 50px;
    }
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    span {
      color: ${({ theme }) => theme.colors.purple};
      font-weight: 800;
    }
  }
`;

export default MyProfile;
