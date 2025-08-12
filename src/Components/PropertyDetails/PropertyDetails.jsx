import React, { useEffect, useState } from 'react'
import PropertyBanner from './PropertyBanner'
import './property.css'
import HomeNavbar from '../HomeNavbar'
import MarqueeSlider from './MarqueeSlider'
import TabsSection from './TabsSection'
import Highlights from './Highlights'
import AssetsComponent from './AssetsComponent'
import Layouts from './Layouts'
import Amenities from './Amenities'
import GalleyImages from './GalleyImages'
import Location from './Location'
import FaqSection from './FaqSection'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'
import PreviousProjects from "../../Components/JSON/PreviousProjects.json"
import { useDispatch } from 'react-redux'
import { SlugPropertyDetails } from '../../reducers/propertyReducer'
import WhatsappAction from '../WhatsappAction'
const PropertyDetails = () => {
  const slugDetails = useParams().slug;

  const dispatch = useDispatch();

  const [PropertyDetails, setPropertyDetails] = useState(null)

  console.log("slugDetails",PreviousProjects)

  const allProjectDetails = PreviousProjects;
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(()=>{
    if(slugDetails){
      const data = allProjectDetails?.filter(item => item.slug === slugDetails)[0]
      setPropertyDetails(data)
      dispatch(SlugPropertyDetails(data))
    }
  },[slugDetails])


  
  return (
    <>
    <div className='PropertyDetails-main-parent'>
        <HomeNavbar/>
        <PropertyBanner/>
        <MarqueeSlider/>
        <TabsSection/>
        <Highlights/>
        <AssetsComponent/>
        <Layouts/>
        <GalleyImages/>
        <Amenities/>
        <Location/>
        <FaqSection/>
        <WhatsappAction/>
        <Footer/>
    </div>
    </>
  )
}

export default PropertyDetails