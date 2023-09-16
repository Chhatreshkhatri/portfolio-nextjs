"use client";
import { useEffect } from "react";

const FaviconVisibilityChange = () => {
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');

    const handleVisibilityChange = () => {
      const hidden = document.hidden;
      favicon?.setAttribute("href", `/icon${hidden ? "-hidden" : ""}.svg`);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default FaviconVisibilityChange;
