import React from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
