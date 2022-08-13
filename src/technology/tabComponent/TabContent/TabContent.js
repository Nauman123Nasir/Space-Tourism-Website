import React from "react";
import './TabContent.scss';
import TabNavItem from "../TabNavitem/TabNavitem";

const TabContent = ({tabNavlinkData,tabsContentData,id, activeTab,setActiveTab}) => {
 return (
  activeTab === id ? <div className="TechTabContent">
        <div className="technologyContentContainer">
          <p className="spaceLaunch"><span className="techNumbering">03</span>space launch 101</p>
          <div className="technologyContent">
              <div className="contentSection">
                  <div className="techContSecOne">
                    <ul className="techNav">
                      {tabNavlinkData.map(function(item,i){ return <TabNavItem  id={'tab'+ ++i} count={i} activeTab={activeTab} setActiveTab={setActiveTab}/>})}
                    </ul>
                  </div>
                  <div className="techContSectwo">
                    <p className="terminlogoy">the terminology...</p>
                    <h2 className="technologyName">{tabsContentData.name}</h2>
                    <p className="technologyDescription">{tabsContentData.description}</p>
                  </div>
              </div>
            <div className="technologyImage">
              <img src={tabsContentData.images.portrait} alt={tabsContentData.name} />
            </div>
          </div>
        </div>
   </div>
   : null
 );
};
 
export default TabContent;