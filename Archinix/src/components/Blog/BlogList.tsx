import { useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

import blogData from "@/jsondata/blogData.json";

interface BlogItem {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  img: string;
}

export default function BlogList() {
  const blogs: BlogItem[] = blogData;

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div id="blog_page" className="hero-area">
      <div className="container">
        <div className="row mt-40">
          {selectedBlogs.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard item={item} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row mt-40 justify-content-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
