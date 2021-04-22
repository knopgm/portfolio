import { useLayoutEffect } from "react";

export function useLockBodyScroll(shouldHide) {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    if (typeof shouldHide === "undefined" || shouldHide) {
      document.body.style.overflow = "hidden";
    }
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [shouldHide]); // Empty array ensures effect is only run on mount and unmount
}
