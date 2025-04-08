import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-button"
      >
        &lt;
      </button>
      
      <span className="page-info">{currentPage} of {totalPages}</span>
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-button"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;