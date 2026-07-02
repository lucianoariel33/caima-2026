import BlogCommentForm from "./BlogCommentForm";
import BlogComments from "./BlogComments";
import BlogDetailsContent from "./BlogDetailsContent";
import BlogSidebar from "./BlogSidebar";

import BlogRelatedImages from "./BlogRelatedImages";
import BlogQuote from "./BlogQuote";
import BlogTags from "./BlogTags";

import blogDetailsData from "@/jsondata/blogDetails.json";

interface Tip {
  id: number;
  title: string;
  text: string;
}

interface BlogDetailsType {
  id: number;
  title: string;
  author: string;
  date: string;
  commentsCount: number;
  featureImg: string;
  heading: string;
  following: string;
  paragraphs: string[];
  tips: Tip[];
}

const blogDetails: BlogDetailsType = blogDetailsData;

export default function BlogDetailsWrapper() {
  return (
    <div className="blog-details-page">
      <div className="container">
        <div className="row gx-0 gx-md-5 justify-content-around">
          <div className="col-xl-4 col-lg-4 order-2 order-lg-1">
            <BlogSidebar />
          </div>

          <div className="col-xl-8 col-lg-8 order-1 order-lg-2 mt-30">
            <div className="section-title">
              <h2 className="visible-slowly-right">
                {blogDetails.title}
                <span>
                  <i className="las la-arrow-right"></i>
                </span>
              </h2>
            </div>

            <hr />

            <div className="blog-meta">
              <div className="blog-info">
                <span>{blogDetails.author}</span>
                <span>{blogDetails.date}</span>
              </div>
              <div className="blog-comments">
                <p>{blogDetails.commentsCount} Comments</p>
              </div>
            </div>

            <div className="blog-featured-img mt-30">
              <img src={blogDetails.featureImg} alt="" />
            </div>
            <div className="blog-content p-animation">
              <h3>{blogDetails.heading}</h3>

              {blogDetails.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <BlogDetailsContent tips={blogDetails.tips} />
              <p>{blogDetails.following}</p>
            </div>

            <BlogRelatedImages />

            <BlogQuote />

            <BlogTags />

            <BlogComments />
            <BlogCommentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
