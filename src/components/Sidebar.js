import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { faChartBar, faBook, faMoneyBillAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebarMinimized = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const sidebarItems = [
    { icon: faChartBar, label: 'Dashboard', link: '/dashboard' },
    {
      icon: faUser,
      label: 'Registration',
      link: '#',
      submenu: [
        { label: 'All Students', link: '/all-students' },
        { label: 'Add new', link: '/add-new' },
        { label: 'Update Student', link: '/update-student' },
        { label: 'De-Registration', link: '/de-registration' },
        { label: 'Extension', link: '/extension' },
      ],
    },
    { icon: faMoneyBillAlt, label: 'Payment', link: '/payment', 
      submenu: [
        {label: 'Payment History', link: '/paymenthistory'},
      ],
    },
    { icon: faBook, label: 'Sample', link: '/sample' },
  ];

  return (
    <aside className={`sidebar ${isSidebarMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-header">
        <div className={`logo ${isSidebarMinimized ? 'hidden' : ''}`}>
          <img src="Uni_emblem.jpg" alt="LearnOrg" />
        </div>
        <button className="menu-button" onClick={toggleSidebarMinimized}>
          Menu
        </button>
      </div>
      <nav>
        <ul>
          <li className="menu-section">MAIN</li>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              link={item.link}
              submenu={item.submenu}
            />
          ))}
          <li className="menu-section">OTHER</li>
          <SidebarItem icon={faBook} label="Sample" link="/sample" />
          <SidebarItem icon={faBook} label="Sample" link="/sample" />
          <SidebarItem icon={faBook} label="Sample" link="/sample" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
