"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly && typeof window.Calendly.initInlineWidget === "function") {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/harshitchejara29/30min", // replace with your actual Calendly link
          parentElement: document.getElementById("calendly-inline-widget"),
        });
      }
    };

    return () => {
      const el = document.getElementById("calendly-inline-widget");
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="calendly-inline-widget"
      style={{ minWidth: "320px", height: "900px" }}
      className="rounded-2xl overflow-hidden bg-white"
    />
  );
}