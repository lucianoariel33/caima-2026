import { Link } from "react-router-dom";

interface BlogItem {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  img: string;
}

export default function BlogCard({ item }: { item: BlogItem }) {
  return (
    <div className="single-blog-item mt-30 wow fadeInUp">
      <div className="blog-bg">
        <img src={item.img} alt={item.title} />
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <p>{item.category}</p>
        </div>

        <h3>
          <Link to={`/blog-details/${item.id}`}>{item.title}</Link>
        </h3>

        <div className="blog-info">
          <div className="blog-author">
            <p>by {item.author}</p>
          </div>

          <div className="blog-date">
            <p>{item.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
