// ? Local Files
import { projects_section } from "../assets/constants";
// ? packages
import { motion } from "framer-motion";
import { VscGithubAlt } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiImage } from "react-icons/fi";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-full overflow-hidden grid place-items-center"
    >
      <div
        id="projects_cards"
        className="py-10 w-4/5 h-5/6 overflow-y-scroll max-md:w-full"
      >
        {projects_section.map((project) => {
          return (
            <motion.div
              key={project.projectNo}
              transition={{ delay: 0.1 * project.projectNo }}
              whileInView={{ opacity: [0, 1] }}
              id={`project_${project.projectNo}`}
              className="relative w-full h-2/3 border-spacing-0  mb-10 rounded-lg overflow-hidden shadow-2xl"
            >
              <div
                id={`project_${project.projectNo}_img`}
                className="w-full h-full absolute top-0 left-0 z-[1]"
              >
                <motion.img
                  className="translate-x-80 -translate-y-10 max-md:translate-x-0 max-md:translate-y-0"
                  src={project.projectImgLink}
                  alt={`${project.projectImgLink}`}
                />
              </div>
              <motion.div
                id={`project_${project.projectNo}_gredient_div`}
                className="w-full h-full absolute top-0 left-0 z-[2]"
                animate={{
                  background:
                    "linear-gradient(90deg, rgb(30, 41, 59), rgba(30, 41, 59, 0.8)",
                }}
                whileHover={{
                  background:
                    "linear-gradient(90deg, rgb(30, 41, 59), rgba(30, 41, 59, 0.2)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
              <div
                id={`project_${project.projectNo}_details`}
                className="w-2/4 max-md:w-full max-md:px-4 h-full absolute top-0 left-0 z-[3] py-10 px-5 text-white"
              >
                <h1 className="text-xl max-md:text-xl font-bold tracking-widest capitalize ">
                  {project.projectName}
                </h1>
                <p className="text-lg text-gray-500">
                  {project.projectSummary}
                </p>
                <div
                  id={`project_${project.projectNo}_links`}
                  className=" w-1/3 flex items-center justify-between"
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="text-xl p-2 text-pink-500"
                    href={project.projectGithubLink}
                    target="_blank"
                    title="Github Link"
                  >
                    <VscGithubAlt />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="text-xl p-2 text-pink-500"
                    href={project.projectImgLink}
                    target="_blank"
                    title="Image Link"
                  >
                    <FiImage />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="text-xl p-2 text-pink-500"
                    href={project.projectLivedemoLink}
                    target="_blank"
                    title="Project Live Demo"
                    onClick={(e) => {
                      e.preventDefault();
                      project.projectLivedemoLink === ""
                        ? window.alert(
                            "Not Hosted anywhere yet. Will Upadate Soon"
                          )
                        : null;
                    }}
                  >
                    <HiOutlineExternalLink />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
