// ? Local Files
import "./style/tailwindcss.css";
import "./style/resets.css";

// ? Page Components
import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Blogs from './components/Blogs'; 
import Projects from './components/Projects'; 

// ? Small Components
import Cursor from './components/mini_comps/Cursor'; 
import Navbar from './components/mini_comps/Navbar'; 
import BottomBar from './components/mini_comps/BottomBar'; 

// ? packages
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <div id="codeRoot" className="w-screen h-screen bg-slate-900 text-white overflow-hidden relative py-10 px-8">
      <BrowserRouter>
      <Cursor/>
      <Navbar/>
      <BottomBar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/projects" Component={Projects} />
          <Route path="/blogs" Component={Blogs} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
