import { useLayoutEffect, useRef } from "react";
import "./App.css";
import Page0 from "./components/Page0";
import Page1 from "./components/Page1";
import ParticleCanvas from "./components/ParticleCanvas";
import { PrizeSection } from "./components/Prizes/PrizeSection";
import { SponsorSection } from "./components/Sponsor/SponsorSection";
import { FaqSection } from "./components/Faq/FaqSection.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgContainerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgContainerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            markers: true, // Enable markers for debugging
          },
        })
        .to(imgRef.current, { scale: 10, duration: 1, ease: "power2.inOut" });
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <>
      <ParticleCanvas />
      <Page0 ref1={imgContainerRef} ref2={imgRef} />
      <Page1 />
      <PrizeSection />
      <SponsorSection />
      <FaqSection />
    </>
  );
}

export default App;
