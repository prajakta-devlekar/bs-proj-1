import React, { Component } from 'react'
import {InfoConsumer} from './Context'
import Info from '../info'
class Home extends Component {
    render(){
    return (

        <div className='container'>
            <div className='row mt-5'>
            <InfoConsumer>
                {value=>{
                return value.placeInfo.map(item=>{
                return <Info key={item.id} item={item}/>
             })
             }}
            </InfoConsumer>
            </div>
        </div>
    )
}
}

export default Home
