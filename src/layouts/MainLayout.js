import React, { useState } from 'react';
import Headbar from '../components/Headbar'; // Ensure this path is correct
import Footer from '../components/Footer'; // Ensure this path is correct
import Sidebar from '../components/Sidebar'; // Ensure this path is correct
import BulkUpload from '../components/BulkUpload'; // Ensure this path is correct
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [currentView, setCurrentView] = useState(''); // Add state to manage the current view

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const handleViewChange = (view) => {
    setCurrentView(view); // Update the current view state
  };

  return (
    <div className="layout">
      <Sidebar
        isSidebarMinimized={isSidebarMinimized}
        toggleSidebarMinimized={toggleSidebar}
        onViewChange={handleViewChange} // Pass the handler to Sidebar
      />
      <div className="headbar">
        <Headbar />
      </div>
      <div className={`content-wrapper ${isSidebarMinimized ? 'minimized' : ''}`}>
        <main className="main-content">
          {currentView === 'update-student' ? <BulkUpload /> : children} {/* Conditionally render BulkUpload */}
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
