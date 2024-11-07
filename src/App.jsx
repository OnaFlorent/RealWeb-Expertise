import { Tools } from "./components/Tools";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import { CallToAction } from "./components/CallToAction";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { FileDownIcon, FileUser } from "lucide-react";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tools />
      <Portfolio />
      <CallToAction
        minify={true}
        title="CV développeur Full-Stack"
        description="Besoin d'en savoir plus sur mon parcours ? N'hésitez pas à consulter mon CV."
        image={
          <FileDownIcon
            width={24}
            height={24}
            alt="CV_download"
            className="mr-2"
          />
        }
        buttonText="Télécharger"
        buttonLink="https://drive.google.com/file/d/18aF6lSHo-wOrV1PGWWgCEXnBcp7hnIUa/view"
      />
      <Pricing />
      <CallToAction
        minify={false}
        title="Besoin d'une solution sur mesure ?"
        description="Si vous avez besoin d'un site vitrine plus élaboré ou d'un site e-commerce, n'hésitez pas à me contacter pour une estimation via ce formulaire:"
        image={
          <FileUser width={24} height={24} alt="Google_form" className="mr-2" />
        }
        buttonText="Prendre contact"
        buttonLink="https://forms.gle/SQePZgWNcg5ucBB97"
      />
      <Services />
      <Footer />
    </>
  );
}

export default App;
