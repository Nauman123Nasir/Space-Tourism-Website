# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


### Screenshot
src/assets/FireShot Capture 006 - Space Tourism Website - localhost.png

### Links

- Solution URL: 
- Live Site URL: https://spacetourismhub.herokuapp.com/

## My process
 i first built the requires pages components with skelton code and then structured every page one by one and then populated data to them,after that worked on the UI changes and later on worked on to make it responsive

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

i bulit this  application using reactjs using its basic concepts like use state,router to add application pages routing ,used map to loop throught the UI elements to populate them with data,sass format styling for the UI,and then worked on the responsiveness of site using custom css3 media queries


```react
      const TabContent = ({tabNavlinkData,tabsContentData,id, activeTab,setActiveTab}) => {
    
      {tabNavlinkData.map(function(item,i){ return <TabNavItem  id={'tab'+ ++i} count={i} activeTab={activeTab} setActiveTab={setActiveTab}/>})}

## Author

- Website - https://spacetourismhub.herokuapp.com/
- Frontend Mentor - [@Nauman123Nasir](https://www.frontendmentor.io/profile/Nauman123Nasir)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

