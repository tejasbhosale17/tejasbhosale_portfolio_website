import "./styles/scrollVelocity.min.css";
import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

// Helper hook to measure element width
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.getBoundingClientRect().width);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = ["Default Text"],
  velocity = 100,
  className = "",
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
  direction = "left",
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
    direction,
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    // Map scrollY to the horizontal movement of the text
    const x = useTransform(
      scrollY,
      [0, copyWidth], // Input range (scrollY)
      [0, -copyWidth] // Output range (horizontal movement)
    );

    const spans = [];
    for (let i = 0; i < 2; i++) {
      // Only 2 copies are needed for seamless looping
      spans.push(
        <span className={className} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div
          className={scrollerClassName}
          style={{ x, ...scrollerStyle, willChange: "transform" }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
          direction={direction}
        >
          {text}&nbsp; {text}&nbsp; {text}&nbsp; {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
