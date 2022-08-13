import React from "react";
import './TabContent.scss';
import TabNavItem from "../TabNavitem/TabNavitem";

const TabContent = ({tabNavlinkData,tabsContentData,id, activeTab,setActiveTab}) => {
 return (
   activeTab === id ? <div className="destionationTabContent">
     <div className="destinationImage">
       <img src={tabsContentData.images.png} alt={tabsContentData.name} />
     </div>
     <div className="destinationContent">
        <ul className="nav">
            {tabNavlinkData.map(function(item,i){ return <TabNavItem title={item} id={'tab'+ ++i} activeTab={activeTab} setActiveTab={setActiveTab}/>})}
        </ul>
       <div className="mainContent">
         <h2 className="destinationName">{tabsContentData.name}</h2>
         <p className="destinationDescription">{tabsContentData.description}</p>
         <hr/>
         <div className="distanceTime">
           <div>
              <p className="timeDistHead">AVG.DISTANCE</p>
              <p className="travelDistance">{tabsContentData.distance}</p>
           </div>
           <div>
              <p className="timeDistHead">EST.TRAVEL TIME</p>
              <p className="travelTime">{tabsContentData.travel}</p>
          </div>   
         </div>
       </div>
     </div>
   </div>
   : null
 );
};
 
export default TabContent;