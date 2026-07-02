import { Link } from "react-router-dom";

interface Comment {
  id: number;
  name: string;
  date: string;
  img: string;
  comment: string;
}

const comments: Comment[] = [
  {
    id: 1,
    name: "Patric Evra",
    date: "July 18, 2025",
    img: "/assets/img/blog/comment-1.jpg",
    comment:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
    id: 2,
    name: "Monica Benedict",
    date: "July 06, 2025",
    img: "/assets/img/blog/comment-2.jpg",
    comment:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
    id: 3,
    name: "Monica Benedict",
    date: "June 01, 2025",
    img: "/assets/img/blog/comment-3.jpg",
    comment:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
];

export default function BlogComments() {
  return (
    <div className="commetns-section-wrap mt-100">
      <div className="comments-headline">
        <h5>{comments.length} Comments</h5>
        <hr />
      </div>

      {comments.map((c) => (
        <div className="single-comments-wrap mt-60" key={c.id}>
          <div className="single-comments-inner">
            <div className="comments-autor-thumb">
              <img src={c.img} alt="" />
            </div>
            <div className="comments-content">
              <h6>{c.name}</h6>
              <p className="comments-date">{c.date}</p>
              <p>{c.comment}</p>
              <Link to="#" className="reply-btn">
                <i className="las la-reply-all"></i>Reply
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
