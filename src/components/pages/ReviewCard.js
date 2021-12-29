import React, { Component } from 'react'
import {InfoConsumer} from './Context'
import avatar from '../assets/avatars/avatar-1.png'

class ReviewCard extends Component {
  
    render() {
        const{id,name,comment}=this.props.person;
        return (
            <InfoConsumer>
               
            {data=>(
                <div className='media mt-5 row'>
                    <div className='col-1 '>
                    <img src={avatar} alt={id} style={{width:'50px'}} /> 
                    </div>
                    <div className='ps-5 media-body col-11'>
                        <h5 className='mt-0'>{name}</h5>
                        <p>{comment}</p>
                    </div>
                </div>
               
            )}
        </InfoConsumer>
        )
    }
}

export default ReviewCard;
