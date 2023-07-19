// ? Local Files

// ? packages
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section id="home" className="w-full h-full overflow-hidden grid place-items-center">
      <main id="hero" className="text-center">
        <h1 id="hero_title" className="uppercase font-bold text-8xl tracking-widest">hello i'm anup shourya</h1>
        <p id="hero_tagline" className="capitalize font-extralight tracking-widest text-4xl my-5">
          unleashing prosibilities through <br /> passionate code craftsmanship
        </p>
        <Link to={"/projects"} id="hero_cta" className="inline-block uppercase font-bold text-3xl tracking-widest bg-cyan-400 text-purple-800 py-4 px-14 rounded-full">
          projects
        </Link>
      </main>
    </section>
  );
}
