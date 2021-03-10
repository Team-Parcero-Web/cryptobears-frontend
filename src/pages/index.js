import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";

export default function Home(_props, context) {
  return (
    <div>
      <Header />
      <Banner />
      <About />
    </div>
  );
}
