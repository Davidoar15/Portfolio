import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../../actions";
import {
  Project,
  TypeHandleLanguageChange,
  TypeCurrentLanguage,
} from "../../../types";
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import en from "../../../assets/languages/estados-unidos.png";
import es from "../../../assets/languages/espana.png";
import { useTranslation } from "react-i18next";
import Error from "../../Error";

const Details = ({
  handleLanguageChange,
  currentLanguage,
}: {
  handleLanguageChange: TypeHandleLanguageChange;
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const { id } = useParams();
  const [project, setProject] = useState<Project | undefined>();
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 1;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedImgs = project?.images.slice(startIndex, endIndex);
  let totalPages = 0;
  if (project?.images.length)
    totalPages = Math.ceil(project.images.length / pageSize);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  if (typeof id === "string") {
    const fetchProject = async () => {
      try {
        const res = await getProject(id);
        setProject(res);
      } catch (error) {
        console.log("ERROR FETCHING PROJECT", error);
      }
    };

    useEffect(() => {
      fetchProject();
    }, [id]);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`flex justify-center items-center rounded-xl border-4 border-red-600 text-white bg-slate-800 p-2 w-7 h-7 cursor-pointer ${
            currentPage === i ? "b_glow font-semibold" : "bg-slate-500"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#f00"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <>
          {project ? (
            <div className="flex flex-col justify-center items-center bg-slate-900 min-h-screen px-4 py-6 gap-10">
              {/* TOP BAR */}
              <div className="flex justify-between items-center w-full max-w-6xl">
                <NavLink to={"/Portfolio"}>
                  <button className="border-4 border-red-600 p-1 bg-slate-500 hover:bg-white rounded-xl cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-home"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                  </button>
                </NavLink>
                {currentLanguage === "en" ? (
                  <img
                    src={en}
                    className="w-8 h-8 cursor-pointer"
                    onClick={() => handleLanguageChange("es")}
                  />
                ) : (
                  <img
                    src={es}
                    className="w-8 h-8 cursor-pointer"
                    onClick={() => handleLanguageChange("en")}
                  />
                )}
              </div>

              {/* IMAGES + PAGINATION */}
              <div className="w-full max-w-4xl flex flex-col items-center gap-4">
                <div className="project-item">
                  {paginatedImgs?.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`project-img-${index}`}
                      className="project-image p-2 border-double border-8 rounded-xl border-white"
                    />
                  ))}
                </div>
                <div className="flex flex-row justify-center gap-3 flex-wrap">
                  {renderPageNumbers()}
                </div>
              </div>

              {/* TEXT SECTION */}
              <div className="flex flex-col items-center text-center gap-5 max-w-2xl">
                <h2 className="text-red-500 font-bold font-mono text-4xl">
                  {project?.title}
                </h2>
                <h3 className="text-white font-semibold font-mono text-xl">
                  {currentLanguage === "en"
                    ? project?.role_EN
                    : project?.role_ES}
                </h3>
                <p className="text-white font-mono">
                  {currentLanguage === "en"
                    ? project?.description_EN
                    : project?.description_ES}
                </p>
              </div>

              {/* STACKS + LINKS */}
              <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center md:justify-between gap-10 mt-4">
                {/* STACKS */}
                <div className="flex flex-col items-center gap-3 w-full md:w-1/2">
                  <h4 className="text-blue-600 font-semibold font-mono text-xl">
                    {t("Details.stack", { lng: currentLanguage })}
                  </h4>
                  <div className="flex flex-wrap justify-center items-center px-2 py-1 rounded-ss-3xl rounded-br-3xl b_glow">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="m-2">
                        <img
                          src={tech.image}
                          title={tech.name}
                          alt={tech.name}
                          className="h-12 w-12 object-contain cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex flex-col items-center gap-3 w-full md:w-1/2">
                  <h4 className="text-blue-600 font-semibold font-mono text-xl">
                    {t("Details.checkOut", { lng: currentLanguage })}
                  </h4>
                  <div className="border-double border-4 rounded-xl border-white px-3 py-2 w-full max-w-md">
                    <ul className="flex flex-col items-start gap-2">
                      {project.link.map((link, index) => (
                        <Link
                          key={index}
                          to={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li className="text-white font-mono hover:text-blue-600 break-all">
                            {link}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Error currentLanguage={currentLanguage} />
          )}
        </>
      )}
    </>
  );
};

export default Details;
