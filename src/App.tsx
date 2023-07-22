// ? Local Files
import "./style/tailwindcss.css";
import "./style/resets.scss";

// ? Page Components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Blogs from "./components/Blogs";
import Projects from "./components/Projects";

// ? Small Components
import Cursor from "./components/mini_comps/Cursor";
import Navbar from "./components/mini_comps/Navbar";
import BottomBar from "./components/mini_comps/BottomBar";

// ? packages
import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [onLink, setOnLink] = useState(false);
  return (
    <motion.div
      id="codeRoot"
      className="w-screen h-screen leading-relaxed text-slate-400 antialiased bg-slate selection:bg-teal-300 selection:text-teal-900 overflow-hidden py-10 px-8"
      animate={{
        background: [
          "linear-gradient(0deg, rgb(15, 23, 42), rgb(2, 6, 23))",
          "linear-gradient(90deg, rgb(15, 23, 42), rgb(2, 6, 23))",
          "linear-gradient(180deg, rgb(15, 23, 42), rgb(2, 6, 23))",
          "linear-gradient(270deg, rgb(15, 23, 42), rgb(2, 6, 23))",
          "linear-gradient(360deg, rgb(15, 23, 42), rgb(2, 6, 23))",
        ],
      }}
      transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
    >
      <BrowserRouter>
        <Cursor onLink={onLink} />
        <Navbar setOnLink={setOnLink} />
        <BottomBar />
        <Routes>
          <Route path="/" element={<Home setOnLink={setOnLink} />} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" element={<Contact setOnLink={setOnLink} />} />
          {/* IN FUTURE */}
          {/* <Route path="/blogs" Component={Blogs} /> */} 
        </Routes>
      </BrowserRouter>
    </motion.div>
  );
}
