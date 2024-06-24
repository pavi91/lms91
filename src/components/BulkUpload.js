import React from 'react';
import './BulkUpload.css';

const BulkUpload = () => {
  return (
    <div className="upload-container">
      <div className="download-section">
        <div className="download-text">Download CSV Template</div>
        <button className="download-button">
          <span>Download</span>
          <span className="download-icon">⬇️</span>
        </button>
        <div className="upload-instruction">Drag and Drop a CSV/Excel File Here or Click to Upload</div>
      </div>
      <div className="upload-section">
        <div className="upload-box">
          <span>Click to upload</span>
        </div>
        <div className="upload-buttons">
          <button className="start-upload">Start Upload</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default BulkUpload;
