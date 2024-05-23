import { useTranslation } from "react-i18next";
import { ServiceImg } from "../../Obj-Img";
import { TypeCurrentLanguage } from "../../types";

const Services = ({
  currentLanguage,
}: {
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  return (
    <div id="Services" className="p-20 flex flex-col items-left justify-center">
      <h2
        data-aos="fade-right"
        className="text-[52px] text-center font-semibold mb-10 leading-normal uppercase text-red-500"
      >
        {t("Services.title", { lng: currentLanguage })}
      </h2>
      <section data-aos="fade-right">
        <details
          className="mb-7 pb-4 border-2 border-slate-800 rounded-xl bg-slate-800"
        >
          <summary className="text-blue-500 font-semibold mb-5 px-2 py-1 bg-slate-700 rounded-xl cursor-pointer">
            {t("Services.language", { lng: currentLanguage })}
          </summary>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  JavaScript
                  <img
                    src={ServiceImg.JS}
                    alt="JavaScript-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  TypeScript
                  <img
                    src={ServiceImg.TS}
                    alt="TypeScript-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  JAVA
                  <img
                    src={ServiceImg.JAVA}
                    alt="JAVA-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  C++
                  <img
                    src={ServiceImg.CPP}
                    alt="CPP-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Ruby
                  <img
                    src={ServiceImg.Ruby}
                    alt="Ruby-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>
          </div>
        </details>

        <details
          className="mb-7 pb-4 border-2 border-slate-800 rounded-xl bg-slate-800"
        >
          <summary className="text-blue-500 font-semibold mb-5 px-2 py-1 bg-slate-700 rounded-xl cursor-pointer">
            FRONT - END
          </summary>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  React
                  <img
                    src={ServiceImg.React}
                    alt="React-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Vue
                  <img
                    src={ServiceImg.Vue}
                    alt="Vue-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Next.js
                  <img
                    src={ServiceImg.Next}
                    alt="Next-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  HTML5
                  <img
                    src={ServiceImg.HTML}
                    alt="HTML5-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  CSS3
                  <img
                    src={ServiceImg.CSS}
                    alt="CSS3-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  SASS
                  <img
                    src={ServiceImg.SASS}
                    alt="SASS-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Tailwind
                  <img
                    src={ServiceImg.Tailwind}
                    alt="Tailwind-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Bootstrap
                  <img
                    src={ServiceImg.Bootstrap}
                    alt="Bootstrap-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>
          </div>
        </details>

        <details
          className="mb-7 pb-4 border-2 border-slate-800 rounded-xl bg-slate-800"
        >
          <summary className="text-blue-500 font-semibold mb-5 px-2 py-1 bg-slate-700 rounded-xl cursor-pointer">
            BACK - END / {t("Services.db", { lng: currentLanguage })}
          </summary>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Node.js
                  <img
                    src={ServiceImg.Node}
                    alt="Node-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Express.js
                  <img
                    src={ServiceImg.Express}
                    alt="Express-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-2xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Ruby On Rails
                  <img
                    src={ServiceImg.ROR}
                    alt="Ruby-On-Rails-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  PostgreSQL
                  <img
                    src={ServiceImg.Postgre}
                    alt="PostgreSQL-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  MySQL
                  <img
                    src={ServiceImg.MySQL}
                    alt="MySQL-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  MongoDB
                  <img
                    src={ServiceImg.MongoDB}
                    alt="MongoDB-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>
          </div>
        </details>

        <details
          className="pb-4 border-2 border-slate-800 rounded-xl bg-slate-800"
        >
          <summary className="text-blue-500 font-semibold mb-5 px-2 py-1 bg-slate-700 rounded-xl cursor-pointer">
            {t("Services.workTools", { lng: currentLanguage })}
          </summary>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-2xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Visual Studio Code
                  <img
                    src={ServiceImg.VSC}
                    alt="VSC-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Git
                  <img
                    src={ServiceImg.Git}
                    alt="Git-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Docker
                  <img
                    src={ServiceImg.Docker}
                    alt="Docker-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  GitHub
                  <img
                    src={ServiceImg.GitHub}
                    alt="GitHub-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Slack
                  <img
                    src={ServiceImg.Slack}
                    alt="Slack-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="bg-slate-900 text-3xl font-semibold text-red-800 rounded-xl h-36 w-44 border-2 border-red-800 b_glow flex flex-col items-center justify-center">
                  Discord
                  <img
                    src={ServiceImg.Discord}
                    alt="Discord-logo"
                    className="h-12 w-12 object-contain mt-4"
                  />
                </h2>
              </div>
            </div>
          </div>
        </details>
      </section>
    </div>
  );
};

export default Services;
