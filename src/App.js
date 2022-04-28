import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";


//components
import Header from "./components/header";
import Navigation from "./components/navigation";


//pages
import Home from  "./pages/home";
import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";


// styles and animation
import gsap from 'gsap';
import "./styles/App.scss";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about-us", name: "About Us", Component: About },
];


function debounce(fn, ms) {
  var timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms)
  }
}

//routes

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(() => {

    // Prevents flash from happening
    gsap.to("body", 0, { css: { visibility: "visible" } });

    //Grab inner htmlof window for mobile reasons when dealing with vh
    let vh = window.innerHeight * 0.01;

    // Set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);


    const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          ...dimensions,
        });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

 return (
   <>
     <Header dimensions={dimensions} />
     <div className="App">
       {routes.map(({ path, Component }) => (
         <Route key={path} exact path={path}>
           <Component />
         </Route>
       ))}
     </div>
     <Navigation />
   </>
 ); 
}

export default App;

 