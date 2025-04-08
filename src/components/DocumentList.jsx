import Pagination from "./Pagination";
import "./DocumentList.css";

const DocumentList = ({
  documents,
  selectedDocs,
  onDocumentSelect,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleSelect = (docId) => {
    if (selectedDocs.includes(docId) || selectedDocs.length < 5) {
      onDocumentSelect(docId);
    }
  };

  return (
    <div className="document-list" role="list">
      <h2>Documents</h2>
      {selectedDocs.length >= 5 && (
        <div className="warning">Maximum 5 documents can be selected</div>
      )}
      {documents.map((doc) => (
        <div
          key={doc.id}
          className={`document-item ${
            selectedDocs.includes(doc.id) ? "selected" : ""
          }`}
          role="listitem"
        >
          <label>
            <input
              type="checkbox"
              checked={selectedDocs.includes(doc.id)}
              onChange={() => handleSelect(doc.id)}
              disabled={
                !selectedDocs.includes(doc.id) && selectedDocs.length >= 5
              }
            />
            {doc.title}
          </label>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default DocumentList;
