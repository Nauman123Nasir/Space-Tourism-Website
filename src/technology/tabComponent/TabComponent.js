import React, { useState } from "react";
import TabContent from "./TabContent/TabContent";
import data from "../../data.json";
import './TabComponent.scss';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabsNavItemData =  data.technology.map(data=>data.name);
  const tabsContentData = data.technology;
  return (
    <div className="Tabs">
    <div className="outlet">
        {tabsContentData.map(function(item,i){ return <TabContent setActiveTab={setActiveTab} tabNavlinkData ={tabsNavItemData} tabsContentData={item} id={'tab'+ ++i} activeTab={activeTab}></TabContent>})}  
    </div>
  </div>
  );
};
export default TabComponent;