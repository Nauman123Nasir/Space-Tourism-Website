import './TechnologyPage.scss'
import TabComponent from './tabComponent/TabComponent';
import React from 'react';

const TechnologyPage = () => {
  return (
    <div className="technologyPage">
    <div className='technologyContainer'>
      <div className='technologySectionTwo'>
         <TabComponent/>
      </div>
    </div>
  </div>
  );
}

export default TechnologyPage;