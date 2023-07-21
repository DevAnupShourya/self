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
          className="stroke-effect uppercase font-bold text-8xl tracking-widest text-white "
        >
          hello i'm anup shourya
        </motion.h1>
        <p
          id="hero_tagline"
          className="text-gray-500 capitalize font-medium tracking-widest text-4xl my-5"
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
            className="uppercase font-bold text-2xl  text-rose-500"
          >
            projects
          </Link>
        </motion.h1>
      </main>
    </section>
  );
}
