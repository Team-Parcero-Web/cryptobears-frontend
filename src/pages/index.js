import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import ContactUs from '../components/ContactUs/ContactUs';
import Layout from '../components/Layout/Layout';
import Steps from '../components/Steps/Steps';
import Greetings from '../components/Greetings';

export default function Home() {
  return (
    <Layout>
      <Greetings />
      <Banner />
      <About />
      <Steps />
      <ContactUs />
    </Layout>
  );
}
