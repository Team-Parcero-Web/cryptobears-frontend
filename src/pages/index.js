import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import Layout from "../components/Layout/Layout";
import Steps from "../components/Steps/Steps";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Steps />
      <ContactUs />
    </Layout>
  );
}
