// import GlobalStyles from "./styles/GlobalStyles";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";

import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/FAQ";

import Accordion from "./components/Accordion";
import CompanyService from "./components/CompanyService";
import Parralax from "./components/Parralax";

import WhyUs from "./components/WhyUs";
import PhoneParralax from "./components/PhoneParralax";
import { ContactUs } from "./components/ContactUs";
import Test from "./components/Test";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <HeroSection />
        <WhyUs />
        <Parralax />
        <Test />
        <CompanyService />

        <FAQ />
        <Accordion />
        <PhoneParralax />
        <ContactUs />
        <Footer />
      </I18nextProvider>
    </>
  );
};

export default App;
