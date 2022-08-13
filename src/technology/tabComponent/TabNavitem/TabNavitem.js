import React from "react";
import './TabNavitem.scss';
const TabNavItem = ({ id, count, activeTab, setActiveTab }) => {
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active techListItems" : "techListItems"} key={id}>{count}</li>
 );
};
export default TabNavItem;