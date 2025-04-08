import "./ActiveFilters.css"; // Assuming you have some CSS for styling
const ActiveFilters = ({ selectedDocs, selectedTags, documents, tags, onClearDoc, onClearTag, onClearAll }) => {
  return (
    <div className="active-filters">
      <h3>Active Filters</h3>
      <div className="filter-chips">
        {selectedDocs.map((docId) => (
          <span key={docId} className="filter-chip document-chip">
            {documents.find(d => d.id === docId)?.title}
            <button onClick={() => onClearDoc(docId)} aria-label="Remove document filter">×</button>
          </span>
        ))}
        {selectedTags.map((tagId) => (
          <span key={tagId} className="filter-chip tag-chip">
            {tags.find(t => t.id === tagId)?.name}
            <button onClick={() => onClearTag(tagId)} aria-label="Remove tag filter">×</button>
          </span>
        ))}
      </div>
      {(selectedDocs.length > 0 || selectedTags.length > 0) && (
        <button className="clear-all" onClick={onClearAll}>
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default ActiveFilters;