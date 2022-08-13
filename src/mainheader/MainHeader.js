import './MainHeader.scss'
import logo from '../assets/shared/logo.svg';
import { useState ,useRef} from 'react';
import iconhamburger from '../assets/shared/icon-hamburger.svg';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import iconhamburgerclose from '../assets/shared/icon-close.svg';
import React from 'react';

const MainHeader = () => {
  const menuRef = useRef(null);
  const burgerMenuBtn = useRef(null);

  const [burgerMenuState, setBurgerMenuState] = useState(false);
  const toggleBurgerMenu = () =>{
    if(window.innerWidth<650){
      setBurgerMenuState(current=>!current);
    }
  }

  window.addEventListener('resize',function(){
    if(this.window.innerWidth>650){
     if(menuRef){
       if(menuRef.current.classList.contains('burgerMenu')){
           menuRef.current.classList.remove('burgerMenu');
        }
     }
    }
  });
  return (
    <div className="mainHeader" >
      <div className="logoDiv">
        <img src={logo} alt="Logo"/>
      </div>

      <div className='menuDiv'>
          <div className='horizontalLineDiv'>
            <hr/>
          </div>
          <div ref={menuRef} className={burgerMenuState ? 'burgerMenu menuLinks' : 'menuLinks'} >
            <ul>
              <li className='closeButton'><img onClick={toggleBurgerMenu}  src={iconhamburgerclose} alt="close button"/></li>
              <li onClick={toggleBurgerMenu}><Link to="/home"><span className='numbering'>00</span>home</Link></li>
              <li onClick={toggleBurgerMenu}><Link to="/destination"><span className='numbering'>01</span>destination</Link></li>
              <li onClick={toggleBurgerMenu}><Link to="/crew"><span className='numbering'>02</span>crew</Link></li>
              <li onClick={toggleBurgerMenu}><Link to="/technology"><span className='numbering'>03</span>technology</Link></li>
            </ul>
          </div>  
          <div ref={burgerMenuBtn} className="burgerMenuBtn">
             <img onClick={toggleBurgerMenu} src={iconhamburger} alt="hamburger"/>
          </div>
      </div>

    </div>
  );
}

export default MainHeader;