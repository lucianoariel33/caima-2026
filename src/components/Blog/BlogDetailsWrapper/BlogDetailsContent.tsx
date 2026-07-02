interface tapsItem {
  id: number;
  title: string;
  text: string;
}
export default function BlogDetailsContent({ tips }: { tips: tapsItem[] }) {
  return (
    <div className="blog-content-inner">
      {tips.map((sa) => (
        <div key={sa.id}>
          <h4>
            <span>{sa.id}.</span> {sa.title}
          </h4>
          <p>{sa.text}</p>
        </div>
      ))}
    </div>
  );
}
