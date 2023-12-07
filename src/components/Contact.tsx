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
      <div id="contact_card" className="w-2/4 max-md:w-full text-center">
        <h1 className="text-4xl capitalize font-bold">Contact Me</h1>
        <p className="text-xl tracking-widest font-light py-5">
          Welcome to the contact hub! I'm thrilled to connect with you. Whether
          you have inquiries, collaboration proposals, or just want to discuss
          the latest tech trends, this is the place to reach out.
          <br />
          Feel free to drop me a message using the form below, and I'll get back
          to you as soon as possible. Your feedback, questions, and ideas are
          highly valued. Let's build something amazing together!
        </p>
        <motion.a
          href="mailto:contact.yourwebdev@gmail.com"
          target="_blank"
          className="text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 uppercase font-bold m-5"
          whileHover={{ filter: "blur(1px)", scale: 1.2 }}
          transition={{ duration: 0.5, type: "spring" }}
          onMouseEnter={() => {
            props.setOnLink(true);
          }}
          onMouseLeave={() => {
            props.setOnLink(false);
          }}
        >
         E-Mail
        </motion.a>
        <motion.a
          href="https://www.fiverr.com/yourwebdevanup"
          target="_blank"
          className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 uppercase font-bold m-5"
          whileHover={{ filter: "blur(0.5px)", scale: 1.4 }}
          transition={{ duration: 0.5, type: "spring" }}
          onMouseEnter={() => {
            props.setOnLink(true);
          }}
          onMouseLeave={() => {
            props.setOnLink(false);
          }}
        >
         On Fiverr
        </motion.a>
      </div>

      <p className="text-sm tracking-widest font-light capitalize text-center">
        {footer_section.footerMsg}
      </p>
    </section>
  );
}
