import React from "react";
import './TabContent.scss';
import TabNavItem from "../TabNavitem/TabNavitem";

const TabContent = ({tabNavlinkData,tabsContentData,id, activeTab,setActiveTab}) => {
 return (
   activeTab === id ? <div className="TabContent">
     <div className="crewContent">
      <p className="meetCrew"><span className="crewNumbering">02</span>meet your crew</p>
       <div className="mainContent">
         <h2 className="crewRole">{tabsContentData.role}</h2>
         <h1 className="crewName">{tabsContentData.name}</h1>
         <div className="crewBio">
          <p>{tabsContentData.bio}</p>
         </div>
         <ul className="crewNavItems">
            {tabNavlinkData.map(function(item,i){ return <TabNavItem title={item} id={'tab'+ ++i} activeTab={activeTab} setActiveTab={setActiveTab}/>})}
         </ul>
        </div>
       </div>
     <div className="crewImage">
       <img src={tabsContentData.images.png} alt={tabsContentData.name} />
     </div>
   </div>
   : null
 );
};
 
export default TabContent;