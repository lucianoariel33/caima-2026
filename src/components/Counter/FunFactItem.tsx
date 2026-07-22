
interface Props {
  value: number;
  label: string;
  duration?: number;
}

export default function FunFactItem({ value, label }: Props) {
  const formattedValue = value.toLocaleString("es-AR");

  return (
    <div className="single-counter-box">
      <p className="counter-number">
        <span>{formattedValue}</span>
      </p>
      <h6>{label}</h6>
    </div>
  );
}
