import React, { Component } from 'react'
import {InfoConsumer} from './pages/Context'
import {Link} from 'react-router-dom'
import img from './assets/images/mamm.jpg'


class info extends Component {
    render() {
        const {
            id,headerTitle,headerSubTitle,headerText
        }=this.props.item;
        return (
            <InfoConsumer>
            {value=>(
                <div className='col col-lg-4 col-md-5 mx-auto mb-5 d-flex justify-content-center'  >
                 <div className='card customcard' style={{width:'18rem'}}>
                     <img src={img} alt={headerTitle} className='card-img-top'/>
                     <div className='card-body'>
                         <h3 className='card-title text-uppercase'>{headerTitle}</h3>
                         <h5 className='card-title'>{headerSubTitle}</h5>
                         <p className='card-text'>{headerText}</p>
                         <Link onClick={()=>value.handleDetail(id)} className='text-uppercase btn btn-outline-primary' to='/details'
                          >
                         More info
                         </Link>
                     </div>
                 </div>
                </div>
            
             ) }
        </InfoConsumer>
        );
    }
}
export default info




