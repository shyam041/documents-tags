import { useState, useEffect } from "react";
import DocumentList from "./components/DocumentList";
import TagFilter from "./components/TagFilter";
import ActiveFilters from "./components/ActiveFilters";
import "./App.css";

function App() {
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 5;

  // Sample documents data
  const [documents, setDocuments] = useState([
    { id: 1, title: "Financial_Report_2024.pdf" },
    { id: 2, title: "Project_Proposal.pdf" },
    { id: 3, title: "Technical_Documentation.pdf" },
    { id: 4, title: "Meeting_Minutes_March.pdf" },
    { id: 5, title: "Employee_Handbook.pdf" },
    { id: 6, title: "Sales_Report_Q1.pdf" },
    { id: 7, title: "Product_Specifications.pdf" },
    { id: 8, title: "Legal_Agreement.pdf" },
  ]);

  // Sample tags data
  const [tags, setTags] = useState([
    { id: 1, name: "Financial" },
    { id: 2, name: "HR" },
    { id: 3, name: "Technical" },
    { id: 4, name: "Legal" },
    { id: 5, name: "Marketing" },
    { id: 6, name: "Sales" },
    { id: 7, name: "Confidential" },
    { id: 8, name: "Archive" },
  ]);

  const indexOfLastDoc = currentPage * documentsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - documentsPerPage;
  const currentDocuments = documents.slice(indexOfFirstDoc, indexOfLastDoc);
  const totalPages = Math.ceil(documents.length / documentsPerPage);

  const handleDocumentSelect = (docId) => {
    setSelectedDocs((prev) =>
      prev.includes(docId)
        ? prev.filter((id) => id !== docId)
        : [...prev, docId]
    );
  };

  const handleTagSelect = (tagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleClearDoc = (docId) => {
    setSelectedDocs((prev) => prev.filter((id) => id !== docId));
  };

  const handleClearTag = (tagId) => {
    setSelectedTags((prev) => prev.filter((id) => id !== tagId));
  };

  const handleClearAll = () => {
    setSelectedDocs([]);
    setSelectedTags([]);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app">
      <ActiveFilters
        selectedDocs={selectedDocs}
        selectedTags={selectedTags}
        documents={documents}
        tags={tags}
        onClearDoc={handleClearDoc}
        onClearTag={handleClearTag}
        onClearAll={handleClearAll}
      />

      <div className="filters-container">
        <DocumentList
          documents={currentDocuments}
          selectedDocs={selectedDocs}
          onDocumentSelect={handleDocumentSelect}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />
      </div>
    </div>
  );
}

export default App;
