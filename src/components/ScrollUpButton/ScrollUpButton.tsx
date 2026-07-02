import React, { useState, useEffect, useCallback, useRef } from "react";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const debouncedHandleScroll = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleScrollUp = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    if (debouncedHandleScroll.current) {
      clearTimeout(debouncedHandleScroll.current);
    }

    debouncedHandleScroll.current = setTimeout(() => {
      setIsVisible(window.scrollY >= 350);
    }, 10);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleScrollUp();
      }
    },
    [handleScrollUp]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      handleScrollUp();
    },
    [handleScrollUp]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debouncedHandleScroll.current) {
        clearTimeout(debouncedHandleScroll.current);
      }
    };
  }, [handleScroll]);

  return (
    <div
      className={`progress-wrap ${isVisible ? "active-progress" : ""}`}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <i className="las la-arrow-up"></i>
    </div>
  );
}
