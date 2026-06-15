
interface ProgressItemProps {
  title: string;
  percentage: number;
}

export default function ProgressBarItem({
  title,
  percentage,
}: ProgressItemProps) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between single-bar-item">
        <h5 className="my-2">{title}</h5>
        <span className="bar-parcentage">
          <span>{percentage}</span>%
        </span>
      </div>

      <div className="progress" style={{ height: "3px", background: "#eee" }}>
        <div
          className="progress-bar bg-dark"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}
