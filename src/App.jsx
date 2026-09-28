import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

//Smooth Scroll 
import gsap from "gsap" ;
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react"


const App = () => {
    const contentRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        const smoother = ScrollSmoother.create({
          content: "#smooth-content",
          smooth: 1.8,
          effects: true
        });

        return () => {
          smoother && smoother.kill();
          ScrollTrigger.getAll().forEach((t) => t.kill());

        };
    }, []);

    

    return (
      <div className="text-zinc-100 bg-black text-3xl p-4">
        <NavBar />

        <div id="smooth-content" ref={contentRef}>
          <HomePage />
        </div>
      </div>
    )
};

export default App ;