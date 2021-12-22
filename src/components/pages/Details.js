import React, { Component } from 'react'
import {InfoConsumer} from './Context'
import styled from 'styled-components';
import Reviews from './Reviews';
class Details extends Component {
    render() {
    return (
        <InfoConsumer>
            {
                data=>{
                    const{
                        id, headerText,headerTitle,headerSubTitle,img,description,title,maps
                    }=data.detailInfo;
                    return (
                        <React.Fragment>
                            <HeaderDetails className='container-fluid '>
                             <h1 className='display-2 font-weight-bold ' >{headerTitle}</h1>
                             <h5 className='display-6'>{headerSubTitle}</h5>
                             <p>{headerText}</p>
                             {/* Social icons */}
                             <div className ='container mt-5 '>
                                 <div className='row justify-content-center text-center'>
                                     <div className='col-2'>
                                         <i className='fab fa-facebook-f'></i>
                                     </div>
                                     <div className='col-2'>
                                         <i className='fab fa-google-plus-g'></i>
                                     </div>
                                     <div className='col-2'>
                                         <i className='fab fa-whatsapp'></i>
                                     </div>
                                     <div className='col-2'>
                                         <i className='fab fa-twitter'></i>
                                     </div>
                                     <div className='col-2'>
                                         <i className='fab fa-linkedin'></i>
                                     </div>
                                     <div className='col-2'>
                                         <i className='fab fa-snapchat'></i>
                                     </div>
                                 </div>
                             </div>
                            </HeaderDetails>

                            {/* Nav links */}
                            <div className='container mt-5 mb-5 text-center'>
                            <ul className="nav nav-tabs " id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active " id="about-us" data-bs-toggle="tab" data-bs-target="#aboutus" type="button" role="tab" aria-controls="aboutus" aria-selected="true">About us</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="reviews" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Reviews</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="maps" data-bs-toggle="tab" data-bs-target="#map" type="button" role="tab" aria-controls="map" aria-selected="false">Maps</button>
                            </li>
                            </ul>
                            
                            <div className="tab-content mt-4" id="myTabContent">
                            <div className="tab-pane fade show active" id="aboutus" role="tabpanel" aria-labelledby="about-us">
                            <h2 className='mb-3'>{headerTitle}</h2>
                                    <p>{description}</p>
                                    <img src={img} alt={title} className='img-thumbnail img-fluid'></img>
                            </div>
                            <div className="tab-pane fade text-start" id="review" role="tabpanel" aria-labelledby="reviews">
                                 <Reviews/>
                            </div>
                            <div className="tab-pane fade mt-3" id="map" role="tabpanel" aria-labelledby="maps">
                            <iframe src={maps} style={{width:'80%', border:'0', height:'500px', frameborder:'0'}}></iframe>
                            </div>
                            </div>
                            </div>
                    
                            </React.Fragment>
                    )
                }}
        </InfoConsumer>
    )
}
}
export default Details

const HeaderDetails=styled.header`
    background:linear-gradient(rgba(109,109,109),rgba(255,255,255));
    height:80vh;
    text-transform:uppercase;
    text-align:center;
     h1{
         padding-top:10%;
         font-weight:bold;
     }
    p{
        color:(--mainDark);
        padding-left:10%;
        padding-right:10%;
    }
    i{
        font-size:25px;
    }
    i:hover{
        color:var(--mainBlue);
        cursor:pointer;
    }
 `

