import React, { useEffect, useState } from 'react'
import '../PropertyDetails/property.css'
import HomeNavbar from '../HomeNavbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'
import UpcommingProjects from "../../Components/JSON/UpcommingProjects.json"
import { useDispatch } from 'react-redux'
import { SlugPropertyDetails } from '../../reducers/propertyReducer'
import UpcomingPropertyBanner from './UpcomingPropertyBanner'
import UpcomingMarqueeSlider from './UpcomingMarqueeSlider'
import UpcomingTabsSection from './UpcomingTabsSection'
import UpcomingHighlights from './UpcomingHighlights'
import UpcomingLayouts from './UpcomingLayouts'
import UpcomingGalleyImages from './UpcomingGalleyImages'
import UpcomingAmenities from './UpcomingAmenities'
import UpcomingLocation from './UpcomingLocation'
import FaqSection from '../PropertyDetails/FaqSection'
import UpcomingAssetsComponent from './UpcomingAssetsComponent'
import WhatsappAction from '../WhatsappAction'
const UpcomingPropertyDetails = () => {
  const slugDetails = useParams().slug;

  const dispatch = useDispatch();

  const [PropertyDetails, setPropertyDetails] = useState(null)

  console.log("slugDetailsdfgbhnm",UpcommingProjects)

  const UpcommingProjectsData = UpcommingProjects;
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(()=>{
    if(slugDetails){
      const data = UpcommingProjectsData?.filter(item => item.slug === slugDetails)[0]
      setPropertyDetails(data)
      dispatch(SlugPropertyDetails(data))
    }
  },[slugDetails])


  
  return (
    <>
    <div className='PropertyDetails-main-parent'>
        <HomeNavbar/>
        <UpcomingPropertyBanner/>
        <UpcomingMarqueeSlider/>
        <UpcomingTabsSection/>
        <UpcomingHighlights/>
        <UpcomingAssetsComponent/>
        <UpcomingLayouts/>
        <UpcomingGalleyImages/>
        <UpcomingAmenities/>
        <UpcomingLocation/>
        <FaqSection/>
        <WhatsappAction/>
        <Footer/>
    </div>
    </>
  )
}

export default UpcomingPropertyDetails