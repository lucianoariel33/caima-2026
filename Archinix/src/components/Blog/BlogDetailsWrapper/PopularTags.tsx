import { Link } from "react-router-dom";

const tags: string[] = [
  "design trends",
  "sustainability",
  "interior design",
  "architecture",
  "historic preservation",
  "space planning",
  "renovation",
  "furniture design",
  "biophilic design",
  "accessibility",
];

export default function PopularTags() {
  return (
    <div className="popular-tag-wrap mt-60 wow fadeInUp">
      <h5>Popular Tags</h5>
      {tags.map((tag, i) => (
        <Link to="#" key={i}>
          {tag}
        </Link>
      ))}
    </div>
  );
}
