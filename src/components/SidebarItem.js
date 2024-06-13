import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SidebarItem.css';

const SidebarItem = ({ icon, label, link, submenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <li className={`sidebar-item ${submenu ? 'has-submenu' : ''} ${isSubmenuOpen ? 'open' : ''}`}>
      <a href={link} onClick={(e) => {
        if (submenu) {
          e.preventDefault();
          toggleSubmenu();
        }
      }}>
        <FontAwesomeIcon icon={icon} />
        <span className="sidebar-item-label">{label}</span>
      </a>
      {submenu && (
        <ul className="submenu">
          {submenu.map((subItem, index) => (
            <li key={index}>
              <a href={subItem.link}>{subItem.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
