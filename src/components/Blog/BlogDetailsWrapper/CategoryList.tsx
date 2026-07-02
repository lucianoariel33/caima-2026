import { Link } from "react-router-dom";

interface CategoryItem {
  id: number;
  label: string;
  count: string;
}

const categories: CategoryItem[] = [
  { id: 1, label: "Design Trends", count: "01" },
  { id: 2, label: "Sustainability", count: "02" },
  { id: 3, label: "Historic Preservation", count: "03" },
  { id: 4, label: "Space Planning", count: "04" },
  { id: 5, label: "Industry Insight", count: "05" },
];

export default function CategoryList() {
  return (
    <div className="blog-category wow fadeInUp">
      <h5>Categories</h5>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
            <span>{item.count}</span>
            <Link to={`/blogs`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
