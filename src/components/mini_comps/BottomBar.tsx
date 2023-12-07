// ? Local Files
import { social_links, footer_section } from "../../assets/constants";
// ? packages
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <motion.div className="z-20 fixed bottom-0 left-0 w-screen lg:h-24 md:h-20 h-16 lg:py-4 md:py-2">
      <footer
        id="footer"
        className="w-5/6 h-full mx-auto py-2 flex justify-between"
      >
        <motion.div
          id="socialBar"
          className="lg:w-2/6 md:w-3/6 w-full rounded-md bg-slate-900 shadow-2xl"
        >
          <ul className="w-full h-full flex flex-row justify-around items-center">
            {social_links.map((link) => {
              const IconComponent = link.social_media_icon;
              return (
                <motion.li
                  key={`${link.social_media_name}`}
                  whileHover={{ scale: 1.2 }}
                  className="text-cyan-500 font-light lg:text-xl md:text-lg text-lg"
                >
                  <Link to={link.social_media_link} target="_blank">
                    <IconComponent />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          id="statusBar"
          className="lg:w-1/6 md:hidden p-2 rounded-md bg-slate-900 lg:grid  hidden place-items-center shadow-2xl"
        >
          <p className="text-xs">
            <Link
              to="https://www.fiverr.com/s/DL7wXX"
              target="_blank"
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-bold "
            >
              Get to Know on Fiverr
            </Link>
          </p>
        </motion.div>
      </footer>
    </motion.div>
  );
}
