import ProgressBarItem from "./ProgressBarItem";

const progress = [
  { title: "Renovation", percentage: 90 },
  { title: "Functional Spaces", percentage: 70 },
  { title: "Architecture", percentage: 80 },
];

export default function AboutProgress() {
  return (
    <div className="progress-bar-area">
      {progress.map((item, index) => (
        <ProgressBarItem
          key={index}
          title={item.title}
          percentage={item.percentage}
        />
      ))}

    </div>
  );
}
