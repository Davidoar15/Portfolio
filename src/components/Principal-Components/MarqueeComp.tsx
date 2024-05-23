import Marquee from "react-fast-marquee";
import { TypeCurrentLanguage } from "../../types";
import { useTranslation } from "react-i18next";

const MarqueeComp = ({
    currentLanguage,
  }: {
    currentLanguage: TypeCurrentLanguage;
  }) => {

    const { t } = useTranslation("global");
    const isWorking = true;

    return (
        <Marquee className="bg-gray-500 mt-2 text-green-400 font-semibold md:font-bold">
            { 
                isWorking ? (
                    <p>{t("Marquee.working", { lng: currentLanguage })}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                ) : (
                    <p>{t("Marquee.notWorking", { lng: currentLanguage })}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                )
            }
        </Marquee>
    );
}

export default MarqueeComp;