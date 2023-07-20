// ? Local Files

// ? packages
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full z-[2] h-full overflow-hidden grid place-items-center"
    >
      <main id="hero" className="text-center">
        <motion.h1
          id="hero_title"
          className="h1 uppercase font-bold text-8xl tracking-widest"
          animate={{
            textShadow: [
              "0px 0px rgb(6, 182, 212), 0px 0px  rgb(139, 92, 246)",
              "6px 6px rgb(6, 182, 212), -6px -6px  rgb(139, 92, 246)",
              "0px 0px rgb(6, 182, 212), 0px 0px  rgb(139, 92, 246)",
              "-6px -6px rgb(6, 182, 212) ,6px 6px  rgb(139, 92, 246)",
              "0px 0px rgb(6, 182, 212), 0px 0px  rgb(139, 92, 246)",
            ],
          }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        >
          hello i'm anup shourya
        </motion.h1>
        <p
          id="hero_tagline"
          className="text-gray-500 capitalize font-extralight tracking-widest text-4xl my-5"
        >
          unleashing prosibilities through <br /> passionate code craftsmanship
        </p>
        <Link
          to={"/projects"}
          id="hero_cta"
          // className="stroke-shadow inline-block uppercase font-bold text-3xl tracking-widest bg-cyan-400 text-purple-800 py-4 px-14 rounded-full"
          className="cta uppercase font-bold text-4xl tracking-widest py-4 px-14 rounded-full violet-500"
        >
          projects
        </Link>
      </main>
    </section>
  );
}
