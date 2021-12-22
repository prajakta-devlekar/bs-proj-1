import React, { Component } from 'react'
import { 
    placeInfo,
    reviews,
    news,
    detailInfo,
    
 } from '../data';

const InfoContext=React.createContext();
 class InfoProvider extends Component {
     state={
        placeInfo:placeInfo,
        reviews:reviews,
        news:news,
        detailInfo:detailInfo,
     }

     getItem=(id)=>{
         const item=this.state.placeInfo.find(item=>item.id==id);
         return item;
     }
     handleDetail=id=>{
         const item=this.getItem(id);
         this.setState(()=>{
             return {
                 detailInfo:item
             }
         })
        }
    
    render() {
        return (
           <InfoContext.Provider
            value={{
               placeInfo:this.state.placeInfo,
               reviews:this.state.reviews,
               news:this.state.news,
               detailInfo:this.state.detailInfo,
                reviews: this.state.reviews,
                maps: this.state.maps,
                headerTitle: this.state.headerTitle,
                headerSubTitle: this.state.headerSubTitle,
                headerText: this.state.headerText,
                name: this.state.name,
                avatar: this.state.avatar,
                comment: this.state.comment,
                handleDetail:this.handleDetail
           }}>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}
const InfoConsumer=InfoContext.Consumer;

export {InfoProvider,InfoConsumer};
