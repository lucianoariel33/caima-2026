import BlogList from "@components/Blog/BlogList";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
const BreadcrumbBg = "/ESTRUCTURA/breadcrumb_blog_1920x480.jpg";

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
