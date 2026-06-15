import blogOne from "/assets/img/blog/blog-10.jpg";
import blogTwo from "/assets/img/blog/blog-10.jpg";
import blogThree from "/assets/img/blog/blog-10.jpg";

interface BlogRelatedImagesProps {
  src: string;
  id: number;
}
const relatedImages: BlogRelatedImagesProps[] = [
  { id: 1, src: blogOne },
  { id: 2, src: blogTwo },
  { id: 3, src: blogThree },
];

export default function BlogRelatedImages() {
  return (
    <div className="blog-related-img mt-60">
      <div className="row">
        {relatedImages.map((img) => (
          <div key={img.id} className="col-xl-4 col-lg-4 col-md-4 mb-30">
            <img src={img.src} alt={img.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
