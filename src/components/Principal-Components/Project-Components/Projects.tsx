import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TypeCurrentLanguage, TypeProjects } from "../../../types";
import { useTranslation } from "react-i18next";

const Projects = ({
  projects,
  currentLanguage,
}: {
  projects: TypeProjects | undefined;
  currentLanguage: TypeCurrentLanguage;
}) => {
  const { t } = useTranslation("global");
  const pageSize = 4;

  const jobs = projects?.filter((p) => p.isJob === true) || [];
  const nonJobs = projects?.filter((p) => p.isJob === false) || [];

  const [currentJobPage, setCurrentJobPage] = useState(1);
  const jobStartIndex = (currentJobPage - 1) * pageSize;
  const jobEndIndex = jobStartIndex + pageSize;
  const paginatedJobs = jobs.slice(jobStartIndex, jobEndIndex);
  const totalJobPages = Math.ceil(jobs.length / pageSize);

  const changeJobPage = (page: number) => {
    setCurrentJobPage(page);
  };

  const renderJobPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalJobPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => changeJobPage(i)}
          className={`flex justify-center items-center rounded-xl border-4 border-red-600 text-white bg-slate-800 p-2 w-9 h-9 cursor-pointer ${
            currentJobPage === i ? "b_glow font-semibold" : "bg-slate-500"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const [currentNonJobPage, setCurrentNonJobPage] = useState(1);
  const nonJobStartIndex = (currentNonJobPage - 1) * pageSize;
  const nonJobEndIndex = nonJobStartIndex + pageSize;
  const paginatedNonJobs = nonJobs.slice(nonJobStartIndex, nonJobEndIndex);
  const totalNonJobPages = Math.ceil(nonJobs.length / pageSize);

  const changeNonJobPage = (page: number) => {
    setCurrentNonJobPage(page);
  };

  const renderNonJobPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalNonJobPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => changeNonJobPage(i)}
          className={`flex justify-center items-center rounded-xl border-4 border-red-600 text-white bg-slate-800 p-2 w-9 h-9 cursor-pointer ${
            currentNonJobPage === i ? "b_glow font-semibold" : "bg-slate-500"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div
      id="Projects"
      data-aos="fade-up"
      className="p-20 flex flex-col items-left justify-center"
    >
      <h2 className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">
        {t("Experiences.title", { lng: currentLanguage })}
      </h2>

      <details className="mb-7 pb-4 border-2 border-slate-800 rounded-xl bg-slate-800">
        <summary className="text-blue-500 font-semibold mb-5 px-2 py-1 bg-slate-700 rounded-xl cursor-pointer">
          {t("Experiences.jobs", { lng: currentLanguage })}
        </summary>

        {paginatedJobs?.length ? (
          <div className="flex flex-col justify-between min-h-[320px]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-20 px-8">
              {paginatedJobs.map((project) => (
                <div key={project._id} className="project-item flex-start">
                  <NavLink to={`project/${project._id}`}>
                    <img
                      key={project._id}
                      src={project.images[0]}
                      alt={project.title}
                      className="project-images text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"
                    />
                  </NavLink>
                  <h4 className="text-[18px] text-center font-semibold mt-4 leading-normal text-red-500">
                    {project.title}
                  </h4>
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-center items-center gap-20">
              <div className="flex flex-row gap-2">
                {renderJobPageNumbers()}
              </div>
            </div>
          </div>
        ) : (
          <h2 className="text-[45px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">
            {t("Experiences.loading.jobs", { lng: currentLanguage })}
          </h2>
        )}
      </details>

      <details className="mb-7 pb-4 border-2 border-slate-800 rounded-xl bg-slate-800">
        <summary className="text-blue-500 font-semibold mb-5 px-2 py-1 bg-slate-700 rounded-xl cursor-pointer">
          {t("Experiences.projects", { lng: currentLanguage })}
        </summary>

        {paginatedNonJobs.length ? (
          <div className="flex flex-col justify-between min-h-[320px]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-20 px-8">
              {paginatedNonJobs.map((project) => (
                <div key={project._id} className="project-item w-full max-w-[240px] mx-auto">
                  <NavLink to={`project/${project._id}`}>
                    <img
                      key={project._id}
                      src={project.images[0]}
                      alt={project.title}
                      className="project-images text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-red-800 b_glow"
                    />
                  </NavLink>
                  <h4 className="text-[18px] text-center font-semibold mt-4 leading-normal text-red-500">
                    {project.title}
                  </h4>
                </div>
              ))}
            </div>
            
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-row gap-2">
                {renderNonJobPageNumbers()}
              </div>
            </div>
          </div>
        ) : (
          <h2 className="text-[45px] text-center font-semibold mb-20 leading-normal uppercase text-red-500">
            {t("Experiences.loading.projects", { lng: currentLanguage })}
          </h2>
        )}
      </details>
    </div>
  );
};

export default Projects;
