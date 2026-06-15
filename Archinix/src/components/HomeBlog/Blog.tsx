import { Link } from "react-router-dom";
import SectionHeading from "@components/SectionHeading/SectionHeading";

interface BlogItmes {
  id: number;
  imgSrc: string;
  category: string;
  date: string;
  title: string;
  author: string;
}

const blogs: BlogItmes[] = [
  {
    id: 1,
    imgSrc: "assets/img/blog/1-1.jpg",
    category: "Architecture",
    date: "August 31, 2025",
    title: "How to Design a Sustaintable Home",
    author: "by John Doe",
  },
  {
    id: 2,
    imgSrc: "assets/img/blog/1-2.jpg",
    category: "Interior Design",
    date: "August 15, 2025",
    title: "The Importance of Lighting Design in Interior Spaces",
    author: "by Paul Roberts",
  },
  {
    id: 3,
    imgSrc: "assets/img/blog/1-3.jpg",
    category: "Architecture",
    date: "August 8, 2025",
    title: "Creating a Functional Home Office Space",
    author: "by Sarah Gomez",
  },
];

export default function Blog() {
  return (
    <div className="blog-section section-padding pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <SectionHeading subtitle="Read Articles" title="Latest Post" />
          </div>
        </div>
        <div className="row">
          {blogs.map((blog, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp animated"
              data-wow-delay={`${0.2 * (index + 1)}s`}
              key={blog.id}
            >
              <div className="single-blog-item">
                <div className="blog-bg">
                  <img src={blog.imgSrc} alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p>
                      {blog.category} / {blog.date}
                    </p>
                  </div>
                  <h3>
                    <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
                  </h3>
                  <div className="blog-info">
                    <div className="blog-author">
                      <p>{blog.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
