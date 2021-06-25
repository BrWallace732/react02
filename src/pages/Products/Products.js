import React from 'react'
import {  homeObjTwo, homeObjThree } from './Data'
import { InfoSection, Pricing } from '../../components'


const Home = () => {
    return (
        <>  
        <InfoSection {...homeObjTwo} /> 
        <Pricing />  
        <InfoSection {...homeObjThree} />      
        </>
    )
}

export default Home
