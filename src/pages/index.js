import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <ContactUs />
    </Layout>
  );
}
