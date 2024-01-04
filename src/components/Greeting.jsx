import { useTranslation } from "react-i18next";

const Greeting = () => {
  const { t } = useTranslation();

  return <p>test{t("greeting")}</p>;
};

export default Greeting;
