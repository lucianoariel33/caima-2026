import type { ReactNode } from "react";

type SectionMarkerProps = {
  code: string;
  name: string;
  children: ReactNode;
};

export default function SectionMarker({ code, name, children }: SectionMarkerProps) {
  return (
    <div className="section-marker" data-section-code={code} data-section-name={name}>
      <span className="section-marker__badge" aria-label={`Seccion ${code}: ${name}`}>
        {code}
      </span>
      {children}
    </div>
  );
}
