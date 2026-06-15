import BlogList from "@components/Blog/BlogList";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import BreadcrumbBg from "/assets/img/breadcrumb/blog-bg.jpg";

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
