import React from "react";
import Header from "../components/Header/Header";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import { Container, Heading2, Label, Heading3 } from "../components/lib";
import styled from "styled-components";
import { client } from "../api/client";
import { useWeb3Context } from "../Context/Web3Context";
import BearCard from "../components/BearCard/BearCard";
import Layout from "../components/Layout/Layout";

const MyProfile = () => {
  const { account, activate } = useWeb3React();
  const { injected } = useWeb3Context();
  const router = useRouter();
  const [myBears, setMyBears] = React.useState([]);
  const [bears, setBears] = React.useState([]);

  React.useEffect(() => {
    if (!account && window.sessionStorage.getItem("isLoggedIn") === "false") {
      router.push("/login");
    }
  }, [account]);

  React.useEffect(() => {
    client(`bears/?owner=${account}`).then((data) => {
      setBears(data);
      setMyBears(data);
    });
  }, []);

  React.useEffect(() => {
    if (window.sessionStorage.getItem("isLoggedIn") === "true") {
      activate(injected);
    }
  }, []);

  return (
    <Layout>
      <Container className="container">
        <Inner>
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
            {myBears.map((bear) => (
              <BearCard bear={bear} />
            ))}
          </BearsGrid>
        </Inner>
      </Container>
    </Layout>
  );
};

const Inner = styled.div`
  margin-top: 7rem;
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

const BearsGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;
export default MyProfile;
