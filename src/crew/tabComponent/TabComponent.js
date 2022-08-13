import React, { useState } from "react";
import TabContent from "./TabContent/TabContent";
import data from "../../data.json";
import TabNavItem from "./TabNavitem/TabNavitem";
import './TabComponent.scss';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabsNavItemData =  data.crew.map(data=>data.name);
  const tabsContentData = data.crew;
  return (
        tabsContentData.map(function(item,i){ return <TabContent setActiveTab={setActiveTab} tabNavlinkData ={tabsNavItemData} tabsContentData={item} id={'tab'+ ++i} activeTab={activeTab}></TabContent>})  
  );
};
export default TabComponent;