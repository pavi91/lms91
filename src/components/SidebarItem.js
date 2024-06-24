import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SidebarItem.css';

const SidebarItem = ({ icon, label, link, submenu, isSidebarMinimized, toggleSidebarMinimized, onSubItemClick }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  useEffect(() => {
    // Close submenu when sidebar is minimized
    if (isSidebarMinimized) {
      setIsSubmenuOpen(false);
    }
  }, [isSidebarMinimized]);

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);

    // Automatically maximize sidebar when opening submenu
    if (toggleSidebarMinimized && isSidebarMinimized) {
      toggleSidebarMinimized();
    }
  };

  return (
    <li className={`sidebar-item ${submenu ? 'has-submenu' : ''} ${isSubmenuOpen ? 'open' : ''}`}>
      <a href={link} onClick={submenu ? toggleSubmenu : undefined}>
        <div className="icon-container">
          <FontAwesomeIcon icon={icon} className="sidebar-icon" />
        </div>
        {!isSidebarMinimized && <span className="sidebar-item-label">{label}</span>}
      </a>
      {submenu && (
        <ul className="submenu">
          {submenu.map((subItem, index) => (
            <li key={index}>
              <a
                href={subItem.link}
                className="submenu-item"
                onClick={() => {
                  if (subItem.onClick) subItem.onClick();
                  if (onSubItemClick) onSubItemClick(subItem.link);
                }}
              >
                {subItem.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
