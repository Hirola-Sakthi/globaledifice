import React from 'react'
import { useSelector } from 'react-redux';

const OngoingAmenities = () => {
    const propertyData = useSelector(state => state?.property?.propertyData)
    console.log("propertyDataHGFCDXS", propertyData);
    // const AminitiesData = [
    //     {
    //         image: "/elevator.svg",
    //         text: "Elevator"
    //     },
    //     {
    //         image: "/laundry.svg",
    //         text: "Laundry Facilities"
    //     },
    //     {
    //         image: "/closet.svg",
    //         text: "Walk In Closet"
    //     },
    //     {
    //         image: "/fire.svg",
    //         text: "Fire Place"
    //     },
    //     {
    //         image: "/balcony.svg",
    //         text: "Balcony"
    //     }, {
    //         image: "/park.svg",
    //         text: "Garden"
    //     },
    //     {
    //         image: "/elevator.svg",
    //         text: "Elevator"
    //     },
    //     {
    //         image: "/laundry.svg",
    //         text: "Laundry Facilities"
    //     },
    //     {
    //         image: "/closet.svg",
    //         text: "Walk In Closet"
    //     },
    //     {
    //         image: "/fire.svg",
    //         text: "Fire Place"
    //     },
    //     {
    //         image: "/balcony.svg",
    //         text: "Balcony"
    //     }, {
    //         image: "/park.svg",
    //         text: "Garden"
    //     },
    //     {
    //         image: "/elevator.svg",
    //         text: "Elevator"
    //     },
    //     {
    //         image: "/laundry.svg",
    //         text: "Laundry Facilities"
    //     },
    //     {
    //         image: "/closet.svg",
    //         text: "Walk In Closet"
    //     },
    //     {
    //         image: "/fire.svg",
    //         text: "Fire Place"
    //     },
    //     {
    //         image: "/balcony.svg",
    //         text: "Balcony"
    //     }, {
    //         image: "/park.svg",
    //         text: "Garden"
    //     },
    // ]
    return (
        <>
            {
                propertyData?.amenities?.length > 0 && (
                    <div className='Amenities-main-parent' id='Amenities'>
                        <div className='AssetsComponent-sub-parent'>
                            <h1>Amenities - </h1>
                        </div>
                        <div className='Amenities-sub-parent'>
                            <div className="row">
                                {propertyData?.amenities?.map((item, index) => (
                                    <div className="col-md-2" key={index} >
                                        <div className='Aminities-content'>
                                            <div className='Amenities-image'>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <p>{item.text} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                )}
        </>
    )
}

export default OngoingAmenities