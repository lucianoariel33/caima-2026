interface ParagraphSection {
  title?: string;
  paragraphs: string[];
}

export default function Overview({ section }: { section: ParagraphSection }) {
  return (
    <div className="project-details">
      <h2>{section.title}</h2>
      {section.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
