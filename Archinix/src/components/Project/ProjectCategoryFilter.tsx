import { PROJECT_CATEGORIES } from "@/content/projects";

interface ProjectCategoryFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function ProjectCategoryFilter({
  activeFilter,
  onFilterChange,
}: ProjectCategoryFilterProps) {
  const filters = ["*", ...PROJECT_CATEGORIES];

  return (
    <div className="cad-project-filter" role="tablist" aria-label="Filtrar proyectos por categoría">
      {filters.map((filter) => (
        <button
          type="button"
          key={filter}
          role="tab"
          aria-selected={activeFilter === filter}
          className={`cad-project-filter__pill${activeFilter === filter ? " is-active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter === "*" ? "Todos" : filter}
        </button>
      ))}
    </div>
  );
}
