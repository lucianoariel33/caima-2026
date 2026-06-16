import BlogList from "@components/Blog/BlogList";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_blog.jpg";

export default function Blogs() {
  return (
    <>
      <Breadcrumb
        title="Blogs"
        bgImg={BreadcrumbBg}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Blogs" }]}
      />
      <BlogList />
    </>
  );
}
