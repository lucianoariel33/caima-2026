
interface Props {
  value: number;
  label: string;
  duration?: number;
}

export default function FunFactItem({ value, label }: Props) {
  return (
    <div className="single-counter-box">
      <p className="counter-number">
        <span>{value}</span>
      </p>
      <h6>{label}</h6>
    </div>
  );
}
