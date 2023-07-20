// ? Local Files
import { projects_section } from "../assets/constants";
// ? packages
import { motion } from "framer-motion";
import { VscGithubAlt , VscArrowSwap } from "react-icons/vsc";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" w-full h-full overflow-hidden grid place-items-center"
    >
      <div id="projects_cards" className="w-4/5 h-5/6 overflow-y-scroll">
        {projects_section.map((project) => {
          return (
            <motion.div
              key={project.projectNo}
              transition={{ delay: 0.1 * project.projectNo }}
              whileInView={{ opacity: [0, 1] }}
              id={`project_${project.projectNo}`}
              className="relative w-full h-1/4 border border-violet-700 mb-10 rounded-lg overflow-hidden"
            >
              <div
                id={`project_${project.projectNo}_img`}
                className="w-full h-full absolute top-0 left-0 z-[1]"
              >
                <motion.img
                  src={project.projectImgLink}
                  alt={`${project.projectImgLink}`}
                  className="translate-x-80 -translate-y-10"
                />
              </div>
              <motion.div
                animate={{
                  background:
                    "linear-gradient(90deg, rgb(30, 41, 59), rgba(30, 41, 59, 0.8)",
                }}
                whileHover={{
                  background:
                    "linear-gradient(90deg, rgb(30, 41, 59), rgba(30, 41, 59, 0.2)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                id={`project_${project.projectNo}_gredient_div`}
                // bg-gradient-to-l to-slate-800 from-transparent
                className="w-full h-full absolute top-0 left-0 z-[2]"
              ></motion.div>
              <div
                id={`project_${project.projectNo}_details`}
                className="w-2/4 h-full absolute top-0 left-0 z-[3] p-4"
              >
                <h1 className="text-2xl font-bold tracking-widest capitalize">
                  {project.projectName}
                </h1>
                <p className="text-sm py-1">{project.projectSummary}</p>
                <div id={`project_${project.projectNo}_links`} className=" w-1/3 flex items-center justify-between">
                  <a
                    className="text-xl p-2 text-cyan-500"
                    href={project.projectGithubLink}
                    target="_blank"
                  >
                    <VscGithubAlt />
                  </a>
                  <a
                    className="text-xl p-2 text-cyan-500"
                    href={project.projectLivedemoLink}
                    target="_blank"
                  >
                    <VscArrowSwap/>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
