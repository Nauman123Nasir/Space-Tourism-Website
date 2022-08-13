import './DestinationPage.scss'; 
import TabComponent from './tabComponent/TabComponent';
import React from 'react';


const DestinationPage = () => {
  return (
    <div className="destinationPage">
    <div className='destinationPageContainer'>
      <div className='destinationSection'>
         <TabComponent />
      </div>
    </div>
  </div>
  );
}

export default DestinationPage;