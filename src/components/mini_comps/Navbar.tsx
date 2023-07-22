// ? Local Files
import { navbar_links } from "../../assets/constants";
// ? packages
import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

interface HomeProps {
  setOnLink: (value: boolean) => void;
}

export default function Navbar(props: HomeProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav className="z-20 fixed top-0 left-0 w-screen lg:h-28 md:h-28 h-24 py-4 ">
        <div
          id="navbar"
          className="w-5/6 h-full rounded-md mx-auto px-10 py-2 flex justify-between shadow-2xl bg-slate-900"
        >
          <div id="logo" className="h-full lg:w-1/12 md:w-1/12 w-1/6">
            <Link to={"/"}>
              <svg
                className="w-full h-full"
                viewBox="0 0 265.33905 264.5476"
                version="1.1"
              >
                <defs>
                  <path d="M0 0L180 0L180 184L0 184L0 0Z" id="path_1" />
                  <clipPath id="clip_1">
                    <use href="#path_1" transform="translate(0, -29.060005)" />
                  </clipPath>
                </defs>
                <g id="logo-v2">
                  <g id="logo-sides" fillOpacity="1">
                    <path
                      d="M250.339 0L250.339 0L250.339 249.548L0 249.548L0 0L250.339 0Z"
                      id="logo-sides"
                      fill="none"
                      stroke="none"
                    />
                    <g id="Group">
                      <path
                        d="M213.958 32.4999L213.958 215.5"
                        id="Line"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#22D3EE"
                        strokeWidth="15"
                        strokeLinecap="square"
                      />
                      <path
                        d="M34.4577 31.9999L34.4577 215"
                        id="Line-Copy"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#22D3EE"
                        strokeWidth="15"
                        strokeLinecap="square"
                      />
                      <path
                        d="M0 157.048L160.215 249.548"
                        id="Line-2"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#22D3EE"
                        strokeWidth="15"
                        strokeLinecap="square"
                      />
                      <path
                        d="M88 0.0476685L248.215 92.5476"
                        id="Line-2-Copy"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#22D3EE"
                        strokeWidth="15"
                        strokeLinecap="square"
                      />
                      <path
                        d="M1.14551 92.5L161.36 0"
                        id="Line-3"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#22D3EE"
                        strokeWidth="15"
                        strokeLinecap="square"
                      />
                      <path
                        d="M90.1243 249.5L250.339 157"
                        id="Line-3-Copy"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#22D3EE"
                        strokeWidth="15"
                        strokeLinecap="square"
                      />
                    </g>
                  </g>
                  <g
                    id="A"
                    clipPath="url(#clip_1)"
                    transform="translate(35.661133 61.607735)"
                  >
                    <g transform="translate(60, 0)" id="A" fill="#22D3EE">
                      <path d="M44.4 87.12L14.52 87.12L16.44 76.44L42.12 76.44L44.4 87.12ZM30.12 54.9262L16.44 103.08L1.32 103.08L25.92 27.84L34.2 27.84L58.8 103.08L43.44 103.08L30.12 54.9262Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <div id="menubar" className="w-1/12 h-full grid place-items-center">
            <motion.i
              whileHover={{ scale: 1.2 }}
              whileTap={{ scaleY: 0.5 }}
              className="cursor-pointer lg:text-3xl md:text-2lg text-lg font-bold text-white"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? <RiCloseLine /> : <RiMenu5Fill />}
            </motion.i>
          </div>
        </div>
      </motion.nav>
      <motion.div
        id="menu"
        className={`${
          menuOpen ? "grid" : "hidden"
        }  z-10 fixed top-0 left-0 w-screen h-screen py-28  place-items-center backdrop-blur-md`}
      >
        <ul id="links" className="w-3/6 text-center">
          {navbar_links.map((link) => {
            return (
              // <li key={`${link.link_address}`} className="uppercase text-8xl tracking-widest font-bold links" onClick={() => {setMenuOpen(!menuOpen)}}>
              <motion.li
                whileHover={{ letterSpacing: "0px", scale: 2 }}
                transition={{ type: "spring" }}
                // animate={{letterSpacing : '-10px'}} // works great in desktop only
                key={`${link.link_address}`}
                className="uppercase text-8xl max-lg:text-8xl max-md:text-6xl max-sm:text-4xl  text-white font-bold hover:text-emerald-500 transition-colors"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                onMouseEnter={() => {
                  props.setOnLink(true);
                }}
                onMouseLeave={() => {
                  props.setOnLink(false);
                }}
              >
                <Link to={link.link_address}>{`${link.link_name}`}</Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}
