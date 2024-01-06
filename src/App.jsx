// import GlobalStyles from "./styles/GlobalStyles";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";

import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <I18nextProvider i18n={i18n}>
        <Menu />
        <HeroSection />
        <Service />
        <AboutUs />
      </I18nextProvider>
    </>
  );
};

export default App;
