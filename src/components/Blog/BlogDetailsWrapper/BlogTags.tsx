import { Link } from "react-router-dom";

const tags: string[] = [
  "home office",
  "productivity",
  "ergonomics",
  "workspace design",
  "storage solutions",
  "personalization",
  "lighting",
  "furniture",
  "color scheme",
  "inspiration",
];

export default function BlogTags() {
  return (
    <div className="blog-tag-wrap">
      <h6>Article Tags</h6>
      {tags.map((tag, index) => (
        <Link key={index} to="#">
          {tag}
        </Link>
      ))}
    </div>
  );
}
