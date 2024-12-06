import React, { useEffect, useRef, useState } from "react";
import bg from "../assets/backd.webp";
import GlitchText from "./Glitch";
import "../index.css";

const Page0 = React.forwardRef(({ ref1, ref2 }, ref) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculations for scaling and positioning
  const scaleValue = Math.max(1 - scrollY / 500, 0.5); // Scale down until 0.5
  const translateYValue = Math.min(scrollY / 3, 100); // Move text up to a max of 100px

  return (
    <section className="relative bg-transparent h-screen w-screen">
      <div
        ref={ref1}
        className="img-container perspective flex items-center justify-center h-screen"
        style={{
          transform: `scale(${scaleValue})`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <img
          className="image"
          ref={ref2}
          src={bg}
          alt="Background"
          style={{ transform: `translateY(${translateYValue}px)` }}
        />
        <div
          className="absolute flex flex-col items-center justify-center top-[35vh]"
          style={{
            transform: `translateY(-${translateYValue}px) translateX(${translateYValue}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <GlitchText size="8rem" heading="</Hack-NocTurn>" />
          <GlitchText size="2rem" heading="Registration in:" />
        </div>
      </div>
    </section>
  );
});

export default Page0;
