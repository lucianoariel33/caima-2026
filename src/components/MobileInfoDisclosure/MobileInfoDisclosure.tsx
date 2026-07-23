import type { ReactNode } from "react";

interface MobileInfoDisclosureProps {
  children: ReactNode;
  summary?: string;
  desktopWrapperClassName?: string;
  mobileClassName?: string;
  contentClassName?: string;
}

export default function MobileInfoDisclosure({
  children,
  summary = "Ver información",
  desktopWrapperClassName = "",
  mobileClassName = "",
  contentClassName = "",
}: MobileInfoDisclosureProps) {
  const desktopClassName = [
    "mobile-info-disclosure__desktop",
    desktopWrapperClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const detailClassName = ["mobile-info-disclosure", mobileClassName]
    .filter(Boolean)
    .join(" ");

  const detailContentClassName = [
    "mobile-info-disclosure__content",
    contentClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={desktopClassName}>{children}</div>
      <details className={detailClassName}>
        <summary>{summary}</summary>
        <div className={detailContentClassName}>{children}</div>
      </details>
    </>
  );
}
