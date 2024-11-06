import { Tools } from "./components/Tools";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import { CallToAction } from "./components/CallToAction";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tools />
      <Portfolio />
      <CallToAction minify />
      <Services />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
