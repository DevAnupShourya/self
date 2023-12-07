// ? Local Files

// ? packages
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HomeProps {
  setOnLink: (value: boolean) => void;
}

export default function Home(props: HomeProps) {
  return (
    <section
      id="home"
      className="w-full z-[2] h-full overflow-hidden grid place-items-center text-center"
    >
      <main id="hero" className="">
        <motion.h1
          id="hero_title"
          className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 stroke-effect uppercase font-bold lg:text-8xl md:text-6xl tracking-widest text-5xl text-white "
        >
          hello i'm anup shourya
        </motion.h1>
        <p
          id="hero_tagline"
          className="text-gray-500 capitalize font-medium tracking-widest lg:text-4xl md:text-3xl  text-xl my-5"
        >
          unleashing prosibilities through <br /> passionate code craftsmanship
        </p>
        <motion.h1
          whileHover={{ letterSpacing: "0px", scale: 1.2 }}
          transition={{ type: "spring" }}
          animate={{ letterSpacing: "-1px" }}
        >
          <Link
            onMouseEnter={() => {
              props.setOnLink(true);
            }}
            onMouseLeave={() => {
              props.setOnLink(false);
            }}
            to={"/projects"}
            id="hero_cta"
            className="uppercase font-bold lg:text-2xl  md:text-xl text-lg text-rose-500"
          >
            projects
          </Link>
        </motion.h1>
      </main>
    </section>
  );
}
