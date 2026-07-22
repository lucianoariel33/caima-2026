export default function Gallery({
  images,
  title,
}: {
  images: string[];
  title?: string;
}) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="project-details-img cad-project-gallery">
      {title && <h2>{title}</h2>}
      <div className="cad-project-gallery__grid">
        {images.map((img, index) => (
          <figure className="cad-project-gallery__item" key={`${img}-${index}`}>
            <img src={img} alt={`Imagen ${index + 1} del proyecto`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
