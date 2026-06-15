import { Link } from "react-router-dom";

interface LatestPost {
  id: number;
  tag: string;
  title: string;
  author: string;
  date: string;
}

const latestPosts: LatestPost[] = [
  {
    id: 1,
    tag: "Space Planning",
    title: "Maximizing Small Spaces: Creative Design Solutions",
    author: "Jane Pullman",
    date: "Sept 1, 2025",
  },
  {
    id: 2,
    tag: "Historic Preservation",
    title: "Preserving the Past: Importance of Historic Restoration",
    author: "Haily Johnson",
    date: "August 17, 2025",
  },
  {
    id: 3,
    tag: "Space Planning",
    title: "Designing for Accessibility: Creating Inclusive Spaces",
    author: "Jane Pullman",
    date: "August 10, 2025",
  },
];

export default function LatestPosts() {
  return (
    <div className="latest-post-wrap wow fadeInUp">
      <h5>Latest Post</h5>

      {latestPosts.map((post) => (
        <div className="single-latest-post" key={post.id}>
          <div className="latest-post-content">
            <div className="post-tag">
              <p>{post.tag}</p>
            </div>
            <div className="post-title">
              <h3>
                <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
              </h3>
            </div>
            <div className="blog-info">
              <div className="blog-author">
                <p>by {post.author}</p>
              </div>
              <div className="blog-date">
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
