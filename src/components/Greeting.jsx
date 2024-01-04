import { useTranslation } from "react-i18next";

const Greeting = () => {
  const { t } = useTranslation();

  return <p>{t("greeting")}</p>;
};

export default Greeting;
