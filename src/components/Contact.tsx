// ? Local Files
import { footer_section } from "../assets/constants";
// ? packages

export default function Contact() {
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
        <a
          href="mailto:"
          target="_blank"
          className="text-2xl border-2 border-cyan-500 bg-cyan-500 text-violet-800 font-bold w-full block py-4 transition-colors hover:bg-transparent hover:border-violet-500 hover:text-cyan-500"
        >
          Say Hello
        </a>
      </div>

      <p className="text-sm tracking-widest font-light capitalize">
        {footer_section.footerMsg}
      </p>
    </section>
  );
}
