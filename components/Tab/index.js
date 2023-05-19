import React,{useState} from 'react'
import Tabs from './Tabs'
import {tabLabels } from './constant'
const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME);

    const onClickTab = (tab)=>{
        setActiveTab(tab)

    }
  return (
    <div>
        <Tabs activeTabName = {activeTab} onClick = {onClickTab}/>
    </div>
  )
}

export default TabComponent