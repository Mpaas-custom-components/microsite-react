// components/HorizontalScroll.tsx

import React, { useState, useRef, useEffect } from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScrollFull: React.FC<HorizontalScrollProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (scrollDirection: "left" | "right") => {
    const container = containerRef.current;

    if (!container) return;

    const scrollAmount = 300; // You can adjust the scroll amount as needed

    if (scrollDirection === "left") {
      container.scrollTo({
        left: scrollLeft - scrollAmount,
        behavior: "smooth",
      });
      setScrollLeft(scrollLeft - scrollAmount);
    } else {
      container.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
      setScrollLeft(scrollLeft + scrollAmount);
    }
  };

  const handleIndicatorClick = (index: number) => {
    const container = containerRef.current;

    if (!container) return;

    const cardWidth = container.clientWidth;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setScrollLeft(index * cardWidth);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.clientWidth;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ overflowX: "hidden", textAlign: "center", position: "relative" }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: "0px", // Adjust the gap between items
          padding: "0px", // Adjust padding as needed
          cursor: "grab",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ flex: "0 0 auto", minWidth: "100%" }}>
            {child}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10px", // Adjust the position as needed
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: index === activeIndex ? "black" : "gray",
              margin: "0 5px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}
      >
        {/* <button onClick={() => handleScroll("left")}>Scroll Left</button>
        <button onClick={() => handleScroll("right")}>Scroll Right</button> */}
      </div>
    </div>
  );
};

export default HorizontalScrollFull;
