import BlogDetailsWrapper from "@components/Blog/BlogDetailsWrapper/BlogDetailsWrapper";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_blog_1920x480.jpg";

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
