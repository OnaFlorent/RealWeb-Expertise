import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <Helmet>
        <title>
          Florent Belot | Développeur Full-Stack Freelance sur la métropole
          Lilloise - Création de Sites Web & Applications SaaS - TJM 250/j
        </title>
        <meta
          name="description"
          content="Développeur Full-Stack freelance à Roubaix, concepteur de sites web et applications web et mobile, e-commerce, landing page et solutions numériques sur mesure."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Florent Belot | Développeur Full-Stack Freelance sur la métropole Lilloise
      - Création de Sites Web & Landing Page & Applications Web & SaaS - TJM 250/j"
        />
        <meta
          property="og:description"
          content="Florent Belot | Développeur Full-Stack Freelance sur la métropole Lilloise
      - Création de Sites Web & Landing Page & Applications Web & SaaS - TJM 250/j"
        />
        <meta
          property="og:image"
          content="https://belotflorent.fr/src/assets/profile_img.png"
        />
      </Helmet>

      <Header />

      {/* Section Hero avec balises SEO spécifiques */}
      <Helmet>
        <title>Accueil - Florent Belot, Développeur Full-Stack</title>
        <meta
          name="description"
          content="Bienvenue sur le portfolio de Florent Belot, développeur Full-Stack freelance basé à Roubaix."
        />
      </Helmet>
      <Hero />

      {/* Section Outils */}
      <Helmet>
        <title>Outils et Technologies - Florent Belot</title>
        <meta
          name="description"
          content="Découvrez les outils et technologies utilisés par Florent Belot pour réaliser des projets de développement web modernes et efficaces."
        />
      </Helmet>
      <Tools />

      {/* Section Portfolio */}
      <Helmet>
        <title>Portfolio - Florent Belot</title>
        <meta
          name="description"
          content="Découvrez les projets réalisés par Florent Belot, développeur Full-Stack freelance, pour des clients de divers secteurs."
        />
      </Helmet>
      <Portfolio />

      {/* Call to Action - CV */}
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

      {/* Section Tarifs */}
      <Helmet>
        <title>Tarifs - Florent Belot, Développeur Full-Stack</title>
        <meta
          name="description"
          content="Découvrez les tarifs pour les forfaits clé en main de développement d'applications web offerts par Florent Belot, développeur Full-Stack freelance."
        />
      </Helmet>
      <Pricing />

      {/* Call to Action - Contact */}
      <CallToAction
        minify={false}
        title="Besoin d'une solution sur mesure ?"
        description="Si vous avez besoin d'un site vitrine plus élaboré ou d'un site e-commerce, n'hésitez pas à me contacter pour une estimation via ce formulaire :"
        image={
          <FileUser width={24} height={24} alt="Google_form" className="mr-2" />
        }
        buttonText="Prendre contact"
        buttonLink="https://forms.gle/SQePZgWNcg5ucBB97"
      />

      {/* Section Services */}
      <Helmet>
        <title>
          Florent Belot | Développeur Full-Stack Freelance sur la métropole
          Lilloise - Création de Sites Web & Applications SaaS - TJM 250/j
        </title>
        <meta
          name="description"
          content="Florent Belot propose des services de développement web sur mesure : création de sites vitrines, applications SaaS, landing page et plus encore."
        />
      </Helmet>
      <Services />

      <Footer />
    </HelmetProvider>
  );
}

export default App;
