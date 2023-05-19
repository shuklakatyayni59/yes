import React from 'react'
import {tabLabels} from './constant'
import {Link} from "react-router-dom"
import "./Tabs.css"
const Tabs = ({activeTabName, onClickTab}) => {
    const {CANCEL_AT_ANY_TIME,PICK_YOUR_PRICE,WATCH_ANYWHERE} = tabLabels;
const renderTabTitle = (tabTitle, isActive, icon, id)=>(
       <div onClick ={()=>onClickTab(tabTitle)}
         id = {id} 
         className = {`tab-item ${isActive && "tab-border"}`}>
        <i className={icon}></i>
        <p>{tabTitle} </p>
       </div>
 )
  return (
   <>
   <section className = "tabs">
    <div className="container">
        {renderTabTitle
        (CANCEL_AT_ANY_TIME, 
        activeTabName ===CANCEL_AT_ANY_TIME, 
        "fas fa-door-open fa-3x",
        "tab-1"
        )}

        
{renderTabTitle
        (WATCH_ANYWHERE, 
        activeTabName ===WATCH_ANYWHERE, 
        "fas fa-tags fa-3x",
        "tab-2"
        )}


{renderTabTitle
        (PICK_YOUR_PRICE, 
        activeTabName ===PICK_YOUR_PRICE, 
        "fas fa-tablet-alt fa-3x",
        "tab-2"
        )}


    </div>
   </section>

   {activeTabName === CANCEL_AT_ANY_TIME && (
    <section className = "tab-content">
        <div className="container">
            <div id = "tab-1-content"
             className={`tab-content-item ${
                activeTabName=== CANCEL_AT_ANY_TIME && "show"}`}>

                    <div className="tab-1-content-inner">
                        <div>
                            <p className = "text-lg">
                                If you decide Netflix isn't for you - no problem.
                                 No commitment. Cancel online anytime.
                            </p>
        <Link to ="/netflix-show" className = "btn btn-lg">
            Watch Free for 30 days
        </Link>

                        </div>
                    </div>
                
            </div>
        </div>
    </section>
   )}
       
       {activeTabName === WATCH_ANYWHERE && (
    <section className = "tab-content">
        <div className="container">
            <div id = "tab-1-content"
             className={`tab-content-item ${
                activeTabName=== WATCH_ANYWHERE && "show"}`}>

                    <div className="tab-2-content-top">
                        <div>
                            <p className = "text-lg">
                              Watch TV shows and movies anytime,anywhere-personalised for you
                            </p>
        <Link to ="/netflix-show" className = "btn btn-lg">
            Watch Free for 30 days
        </Link>

                        </div>
                    </div>
                
            </div>
        </div>
    </section>
   )}








   
   </>
  )
}

export default Tabs