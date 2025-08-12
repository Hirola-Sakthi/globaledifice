import React from 'react'
import "../PropertyDetails/highlights.css"
import { useSelector } from 'react-redux';
const UpcomingHighlights = () => {
  const propertyData = useSelector(state => state?.property?.propertyData)
  console.log("signatureHightlights", propertyData);
  const circle1 = (propertyData?.signatureHightlights && propertyData?.signatureHightlights[0]) || "";
  const circle2 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[1];
  const circle3 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[2];
  const circle4 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[3];
  const circle5 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[4];
  const circle6 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[5];
  const circle7 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[6];
  const circle8 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[7];
  const circle9 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[8];
  const circle10 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[10];
  const circle11 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[11];
  const circle12 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[12];
  const circle13 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[13];
  const circle14 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[14];
  const circle15 = propertyData?.signatureHightlights && propertyData?.signatureHightlights[15];
  return (
    <>
      {
        propertyData?.signatureHightlights?.length > 0 && (
          <div className='Highlights-main-parent' id='Highlights'>
            <div className='Highlights-sub-parent'>
              <h1>Signature <span className='span-subtext'>Highlights -</span></h1>
            </div>
            <div className='PropertyDetails-Highlights'>
              <div
                className='d-flex Highlights-borderdcfgbhnj firstrow-parent'
                style={{ width: propertyData?.signatureHightlights?.length > 6 ? "80%" : "58%" }}
              >

                {circle1 && (
                  <div className='Highlights-bordercircle' >
                    <div className='Highlights-image'>
                      <img src={circle1?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle1?.highlights}</h6>
                    <p>{circle1?.highlightstext}</p>
                  </div>
                )}
                {circle2 && (
                  <div className='Highlights-bordercircle2'>
                    <div className='Highlights-image'>
                      <img src={circle2?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle2?.highlights}</h6>
                    <p>{circle2?.highlightstext}</p>
                  </div>
                )}
                {circle3 && (
                  <div className='Highlights-bordercircle' >
                    <div className='Highlights-image'>
                      <img src={circle3?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle3?.highlights}</h6>
                    <p>{circle3?.highlightstext}</p>
                  </div>
                )}
                {circle7 && (
                  <div className='Highlights-bordercircle2'>
                    <div className='Highlights-image'>
                      <img src={circle7?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle7?.highlights}</h6>
                    <p>{circle7?.highlightstext}</p>
                  </div>
                )}
                {circle8 && (
                  <div className='Highlights-bordercircle' >
                    <div className='Highlights-image'>
                      <img src={circle8?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle8?.highlights}</h6>
                    <p>{circle8?.highlightstext}</p>
                  </div>
                )}
              </div>
              <div
                className='d-flex Highlights-borderdcfgbhnj '
                style={{ width: propertyData?.signatureHightlights?.length > 6 ? "80%" : "58%" }}
              >
                {circle4 && (
                  <div className='Highlights-bordercircle' >
                    <div className='Highlights-image'>
                      <img src={circle4?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle4?.highlights}</h6>
                    <p>{circle4?.highlightstext}</p>
                  </div>
                )}
                {circle5 && (
                  <div className='Highlights-bordercircle2'>
                    <div className='Highlights-image'>
                      <img src={circle5?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle5?.highlights}</h6>
                    <p>{circle5?.highlightstext}</p>
                  </div>
                )}
                {circle6 && (
                  <div className='Highlights-bordercircle' >
                    <div className='Highlights-image'>
                      <img src={circle6?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle6?.highlights}</h6>
                    <p>{circle6?.highlightstext}</p>
                  </div>
                )}
                {circle9 && (
                  <div className='Highlights-bordercircle2'>
                    <div className='Highlights-image'>
                      <img src={circle9?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle9?.highlights}</h6>
                    <p>{circle9?.highlightstext}</p>
                  </div>
                )}
                {circle10 && (
                  <div className='Highlights-bordercircle' >
                    <div className='Highlights-image'>
                      <img src={circle10?.highlightsimg} alt="" />
                    </div>
                    <h6>{circle10?.highlights}</h6>
                    <p>{circle10?.highlightstext}</p>
                  </div>
                )}
              </div>
              {propertyData?.signatureHightlights?.length > 11 && (
                <div
                  className='d-flex Highlights-borderdcfgbhnj '
                  style={{ width: propertyData?.signatureHightlights?.length > 6 ? "80%" : "58%" }}
                >
                  {circle11 && (
                    <div className='Highlights-bordercircle' >
                      <div className='Highlights-image'>
                        <img src={circle11?.highlightsimg} alt="" />
                      </div>
                      <h6>{circle11?.highlights}</h6>
                      <p>{circle11?.highlightstext}</p>
                    </div>
                  )}
                  {circle12 && (
                    <div className='Highlights-bordercircle2'>
                      <div className='Highlights-image'>
                        <img src={circle12?.highlightsimg} alt="" />
                      </div>
                      <h6>{circle12?.highlights}</h6>
                      <p>{circle12?.highlightstext}</p>
                    </div>
                  )}
                  {circle13 && (
                    <div className='Highlights-bordercircle' >
                      <div className='Highlights-image'>
                        <img src={circle13?.highlightsimg} alt="" />
                      </div>
                      <h6>{circle13?.highlights}</h6>
                      <p>{circle13?.highlightstext}</p>
                    </div>
                  )}
                  {circle14 && (
                    <div className='Highlights-bordercircle2'>
                      <div className='Highlights-image'>
                        <img src={circle14?.highlightsimg} alt="" />
                      </div>
                      <h6>{circle14?.highlights}</h6>
                      <p>{circle14?.highlightstext}</p>
                    </div>
                  )}
                  {circle15 && (
                    <div className='Highlights-bordercircle' >
                      <div className='Highlights-image'>
                        <img src={circle15?.highlightsimg} alt="" />
                      </div>
                      <h6>{circle15?.highlights}</h6>
                      <p>{circle15?.highlightstext}</p>
                    </div>
                  )}
                </div>
              )}


            </div>

          </div>
        )}
    </>

  )
}

export default UpcomingHighlights