import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageButton = styled.button`
  background-color: var(--color-brand-600);
  border: none;
  color: var(--color-grey-100);
  padding: 0.5rem 1rem;
  box-shadow: -2px 0px 36px -6px rgba(157, 159, 180, 1);
  &:hover {
    background-color: var(--color-brand-700);
  }
  &:active {
    scale: 0.97;
  }
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
