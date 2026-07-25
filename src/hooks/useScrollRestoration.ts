import { useCallback, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollRestoration() {
  const location = useLocation();

  const scrollToPageTop = useCallback(() => {
    const scrollingElement = document.scrollingElement || document.documentElement;

    scrollingElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    let firstFrame = 0;
    let secondFrame = 0;

    scrollToPageTop();

    firstFrame = window.requestAnimationFrame(() => {
      scrollToPageTop();
      secondFrame = window.requestAnimationFrame(scrollToPageTop);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [
    location.hash,
    location.key,
    location.pathname,
    location.search,
    scrollToPageTop,
  ]);

  useEffect(() => {
    const handleInternalLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      ) {
        return;
      }

      const clickedElement =
        event.target instanceof Element ? event.target.closest("a[href]") : null;

      if (!(clickedElement instanceof HTMLAnchorElement)) {
        return;
      }

      if (
        clickedElement.hasAttribute("download") ||
        (clickedElement.target && clickedElement.target !== "_self")
      ) {
        return;
      }

      const destination = new URL(clickedElement.href, window.location.href);

      if (destination.origin !== window.location.origin) {
        return;
      }

      window.requestAnimationFrame(scrollToPageTop);
    };

    document.addEventListener("click", handleInternalLinkClick, true);

    return () => {
      document.removeEventListener("click", handleInternalLinkClick, true);
    };
  }, [scrollToPageTop]);
}

