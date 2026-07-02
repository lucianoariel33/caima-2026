import type { ReactNode } from "react";
import useSectionReveal from "@/hooks/useSectionReveal";

type SectionMarkerProps = {
  code: string;
  name: string;
  children: ReactNode;
  instant?: boolean;
};

const INSTANT_SECTION_CODES = new Set(["A1", "G1"]);

export default function SectionMarker({
  code,
  name,
  children,
  instant,
}: SectionMarkerProps) {
  const shouldRevealInstantly = instant ?? INSTANT_SECTION_CODES.has(code);
  const { ref, isVisible } = useSectionReveal({ disabled: shouldRevealInstantly });

  const classNames = [
    "section-marker",
    shouldRevealInstantly || isVisible ? "section-marker--visible" : "",
    shouldRevealInstantly ? "section-marker--instant" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classNames}
      data-section-code={code}
      data-section-name={name}
    >
      <span className="section-marker__badge" aria-label={`Seccion ${code}: ${name}`}>
        {code}
      </span>
      {children}
    </div>
  );
}
