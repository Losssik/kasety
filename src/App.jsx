// import GlobalStyles from "./styles/GlobalStyles";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";
import Greeting from "./components/Greeting";
import LanguageSwitcher from "./components/LanguageSwitcher";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
        <Greeting />
      </I18nextProvider>
    </>
  );
};

export default App;
