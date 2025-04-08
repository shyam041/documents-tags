import "./TagFilter.css";

const TagFilter = ({ tags, selectedTags, onTagSelect }) => {
  return (
    <div className="tag-filter">
      <h2>Tags</h2>
      <div className="tag-list" role="list">
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onTagSelect(tag.id)}
            className={`tag-chip ${
              selectedTags.includes(tag.id) ? "selected" : ""
            }`}
            aria-pressed={selectedTags.includes(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
