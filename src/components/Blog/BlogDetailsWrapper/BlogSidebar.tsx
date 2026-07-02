import CategoryList from "./CategoryList";
import LatestPosts from "./LatestPosts";
import PopularTags from "./PopularTags";
import SearchBox from "./SearchBox";

export default function BlogSidebar() {
  return (
    <div className="blog-sidebar">
      <SearchBox />
      <CategoryList />
      <LatestPosts />
      <PopularTags />
    </div>
  );
}
