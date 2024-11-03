import { Tools } from "./components/Tools";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import { CallToAction } from "./components/CallToAction";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tools />
      <Services />
      <CallToAction minify />
      <Footer />
    </>
  );
}

export default App;
