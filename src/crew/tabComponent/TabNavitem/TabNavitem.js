import React from "react";
import './TabNavitem.scss';
const TabNavItem = ({ id, activeTab, setActiveTab }) => {
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active crewItems" : "crewItems"} key={id}></li>
 );
};
export default TabNavItem;