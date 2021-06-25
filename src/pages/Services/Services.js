import React from 'react'
import { homeObjThree } from './Data'
import { InfoSection, Pricing } from '../../components'


const Home = () => {
    return (
        <>
        <Pricing />  
        <InfoSection {...homeObjThree} />      
        </>
    )
}

export default Home
