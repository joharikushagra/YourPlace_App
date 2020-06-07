import React,{useState} from 'react'
import './MainNavigation.css'
import MainHeader from './MainHeader'
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'

import Backdrop from '../UIElements/Backdrop'


function MainNavigation(props) {
    //the content btwn mainheader tags will be rendered by props.children in Mainheader.js
    const [drawerIsOpen,setDrawerIsOpen] = useState(false)
    
    const openDrawerHandler =()=>{
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = ()=>{
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
        {drawerIsOpen  && <Backdrop onClick={closeDrawerHandler}/>}
        
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
           <nav className='main-navigation__menu-btn'>
               <NavLinks/>
           </nav>
       </SideDrawer>
       
       <MainHeader>
           <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
               <span></span>
               <span></span>
               <span></span>
           </button>
           <h1 className='main-navigation__title'>
             <Link to='/'>Your Places</Link>
           </h1>
           <nav className='main-navigation__header-nav'>
              <NavLinks/>
           </nav>
       </MainHeader>
       </React.Fragment>
    )
}

export default MainNavigation
