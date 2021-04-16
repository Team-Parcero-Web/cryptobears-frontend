import React from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Heading2 } from "../../components/lib";
import { client } from "../../api/client";
import { BearsGrid } from "../my-profile";
import BearCard from "../../components/BearCard/BearCard";
import Link from "next/link";

const Bears = () => {
  const [bears, setBears] = React.useState([]);

  React.useEffect(() => {
    client(`bears/`).then((data) => {
      setBears(data);
    });
  }, []);
  return (
    <Layout>
      <Container>
        <Heading2>Bears</Heading2>
        <BearsGrid className="mt-5 mb-4">
          {bears.map((bear) => (
            <Link href={`bears/${bear.index}`} key={bear.index}>
              <a href="">
                <BearCard bear={bear} key={bear.index} />
              </a>
            </Link>
          ))}
        </BearsGrid>
      </Container>
    </Layout>
  );
};

export default Bears;
