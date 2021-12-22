import React, { Component } from 'react'
import { InfoConsumer, InfoProvider } from './Context'
import ReviewCard from '../pages/ReviewCard'

class Reviews extends Component {
    render() {
        return (
            <InfoConsumer>
                {data=>{
                    return data.reviews.map(person=>{
                        return <ReviewCard key={person.id} person={person}/>
                    })
                }}
            </InfoConsumer>
        )
    }
}

export default Reviews
