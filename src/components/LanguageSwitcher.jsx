import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageButton = styled.button`
  background-color: #4f46e5;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
`;

const Switcher = styled.div`
  display: flex;
  gap: 0.6rem;
`;

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <Switcher>
      <LanguageButton onClick={() => changeLanguage("en")}>
        English
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage("de")}>
        German
      </LanguageButton>
    </Switcher>
  );
}

export default LanguageSwitcher;
