// import GlobalStyles from "./styles/GlobalStyles";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";

import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/FAQ";

import Accordion from "./components/Accordion";
import CompanyService from "./components/CompanyService";
import Parralax from "./components/Parralax";
import Test from "./components/Test";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <HeroSection />

        <CompanyService />
        <Parralax />
        <FAQ />
        <Accordion />
        <Test />
      </I18nextProvider>
    </>
  );
};

export default App;
