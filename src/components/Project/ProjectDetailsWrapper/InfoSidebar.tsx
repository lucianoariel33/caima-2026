interface InfoItem {
  label: string;
  value: string;
}
export default function InfoSidebar({ info }: { info: InfoItem[] }) {
  if (!info.length) {
    return null;
  }

  return (
    <div className="project-info-wrap">
      <span className="project-info-wrap__label">Ficha técnica</span>
      {info.map((item, index) => (
        <div className="project-info" key={index}>
          <h6>{item.label}</h6>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
