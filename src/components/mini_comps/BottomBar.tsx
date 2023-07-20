// ? Local Files
import { social_links } from "../../assets/constants";

// ? packages
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <motion.div className="z-20 fixed bottom-0 left-0 w-screen h-24 py-4">
      <footer
        id="footer"
        className="w-5/6 h-full mx-auto py-2 flex justify-between"
      >
        <motion.div id="socialBar" className="w-2/6 rounded-md bg-slate-800 shadow-2xl">
          <ul className="w-full h-full flex flex-row justify-around items-center">
            {social_links.map((link) => {
              const IconComponent = link.social_media_icon;
              return (
                <motion.li
                  key={`${link.social_media_name}`}
                  whileHover={{scale : 1.2}}
                  className="text-cyan-500 font-light text-xl"
                >
                  <Link to={link.social_media_link} target="_blank">
                    <IconComponent />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div id="statusBar"className="w-1/6 rounded-md bg-slate-800 grid place-items-center text-xs shadow-2xl">
          <p>Seeking Job Oportuanities</p>
        </motion.div>
      </footer>
    </motion.div>
  );
}
