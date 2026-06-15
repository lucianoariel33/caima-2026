export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="project-details-img">
      <div className="row mt-30">
        {images.map((img, index) => (
          <div className="col-xl-6" key={index}>
            <img src={img} alt={`Project image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
