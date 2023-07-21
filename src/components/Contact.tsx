// ? Local Files
import { footer_section } from "../assets/constants";
// ? packages
import { motion } from "framer-motion";

interface HomeProps {
  setOnLink: (value: boolean) => void;
}

export default function Contact(props: HomeProps) {
  return (
    <section
      id="contact"
      className="w-full h-full overflow-hidden grid place-items-center"
    >
      <div id="projects_cards" className="w-2/4 text-center">
        <h1 className="text-4xl capitalize font-bold">talk to me</h1>
        <p className="text-xl tracking-widest font-light py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste
          pariatur dignissimos architecto, placeat sequi in numquam laudantium?
          Sequi deserunt ipsa enim facere natus. Molestias.
        </p>
        <motion.a
          href="mailto:"
          target="_blank"
          className="text-2xl text-rose-400 uppercase font-bold m-5"
          whileHover={{ filter: "blur(1px)" , scale : 1.2}}
          transition={{ duration: 0.5, type: "spring" }}
          onMouseEnter={() => {
            props.setOnLink(true);
          }}
          onMouseLeave={() => {
            props.setOnLink(false);
          }}>Say Hello</motion.a>
      </div>

      <p className="text-sm tracking-widest font-light capitalize">
        {footer_section.footerMsg}
      </p>
    </section>
  );
}
