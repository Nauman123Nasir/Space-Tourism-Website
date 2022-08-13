import React from "react";
import './TabNavitem.scss';
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active destinationNavItems" : "destinationNavItems"} key={id}>
     { title }
   </li>
 );
};
export default TabNavItem;