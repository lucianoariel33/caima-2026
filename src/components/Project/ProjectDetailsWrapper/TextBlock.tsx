interface ParagraphSection {
  title?: string;
  paragraphs: string[];
}

export default function TextBlock({ section }: { section: ParagraphSection }) {
  return (
    <section className="cad-project-text-block">
      {section.title && <h3>{section.title}</h3>}
      {section.paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </section>
  );
}
