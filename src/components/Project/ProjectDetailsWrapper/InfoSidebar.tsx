interface InfoItem {
  label: string;
  value: string;
}
export default function InfoSidebar({ info }: { info: InfoItem[] }) {
  return (
    <div className="project-info-wrap">
      {info.map((item, index) => (
        <div className="project-info" key={index}>
          <h6>{item.label}:</h6>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
