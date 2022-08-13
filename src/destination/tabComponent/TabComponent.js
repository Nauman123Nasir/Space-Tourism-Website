import React, { useState } from "react";
import TabContent from "./TabContent/TabContent";
import data from "../../data.json";
import './TabComponent.scss';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabsNavItemData =  data.destinations.map(data=>data.name);
  const tabsContentData = data.destinations;
  return (
    <div className="Tabs">
        <p class="destHead"><span className='homeNumbering'>01</span>Pick your destination</p>
        {tabsContentData.map(function(item,i){ return <TabContent setActiveTab={setActiveTab} tabNavlinkData ={tabsNavItemData} tabsContentData={item} id={'tab'+ ++i} activeTab={activeTab}></TabContent>})}  
  </div>
  );
};
export default TabComponent;