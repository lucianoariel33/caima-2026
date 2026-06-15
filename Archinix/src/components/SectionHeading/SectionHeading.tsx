interface SectionHeadingProps {
  subtitle?: string;
  title?: string;
}

export default function SectionHeading({
  subtitle,
  title,
}: SectionHeadingProps) {
  return (
    <div className="section-title">
      {subtitle && <h6 className="wow fadeInUp">{subtitle}</h6>}
      {title && <h2 className="visible-slowly-right">{title}</h2>}
    </div>
  );
}
