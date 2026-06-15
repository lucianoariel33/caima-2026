import BlogDetailsWrapper from "@components/Blog/BlogDetailsWrapper/BlogDetailsWrapper";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import BreadcrumbBg from "/assets/img/breadcrumb/blog-bg.jpg";

export default function BlogDetails() {
  return (
    <>
      <Breadcrumb
        title="Blogs Details"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Blogs Details" }]}
      />
      <BlogDetailsWrapper />
    </>
  );
}
