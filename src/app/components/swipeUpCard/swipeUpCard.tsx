import React, { useRef, ReactNode, TouchEvent, useState } from "react";
import { useSpring, animated } from "react-spring";
import classes from "./swipeUpCard.module.css";

interface SwipeUpCardProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SwipeUpCard: React.FC<SwipeUpCardProps> = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const { height } = useSpring({
    height: isOpen ? "calc(2/3 * 100vh)" : "calc(4.6/10 * 100vh)",
  });

  const handleTouchStart = (e: TouchEvent) => {
    console.log(e.touches, "e.touches 1111111111");

    setDragStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    console.log("Drag Belom Start");

    if (dragStart !== null) {
      console.log("Drag Start");
      console.log(containerRef, "containerRef");

      const containerHeight = containerRef.current?.clientHeight || 0;
      console.log(containerHeight, "containerHeight");
      const swipeThreshold = containerHeight * 0.2;
      console.log(swipeThreshold, "swipeThreshold");

      console.log(e.touches, "e.touches");
      const deltaY = e.touches[0].clientY - dragStart;
      console.log(deltaY, "deltaY");

      if (isOpen && deltaY > swipeThreshold) {
        onClose();
        setDragStart(null);
      } else if (!isOpen && deltaY < -swipeThreshold) {
        onClose();
        setDragStart(null);
      }
    }
  };

  const handleTouchEnd = () => {
    setDragStart(null);
  };

  return (
    <animated.div
      ref={containerRef}
      className={classes.swipeUpCard}
      style={{
        height,
      }}
    >
      <div className={classes.swipe_header} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className={classes.indicator}>
          <div className={classes.indicator_bar}></div>
        </div>
      </div>
      <div className={`${classes.casa_container}`}>
        <div className={`${classes.casa_header_container}`}>
          <div className={`${classes.casa_header_title}`}>Semua Transaksi</div>
        </div>
      </div>
      <div className={classes.scrollableContent}>{children}</div>
    </animated.div>
  );
};

export default SwipeUpCard;
