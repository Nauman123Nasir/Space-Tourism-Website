import './HomePage.scss'
import React from 'react';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className='homePageContainer'>
        <div className='homePageSectionOne'>
           <p className='travel'>So, you want to travel to</p>
           <h1 className='spaceHead'>Space</h1>
           <p className='description'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='homePageSectionTwo'>
          <div className='exploreSection'>
             <div className='explore'>
               <span>Explore</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;