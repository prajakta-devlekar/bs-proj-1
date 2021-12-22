import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/images/garaj2.jpg'
import img2 from '../assets/images/mars.jpg'

function Products() {
    return (
        <ProductContainer className='container'>
        <div className=' mainclass row justify-content-center m-5 pt-3'>
            <div className=' cards ' style={{width:'650px'}}>
                <div className="card customcard row m-3 p-3">
                    <img src={img} className="card-img-top mt-2" alt="..."/>
                <div className="card-body">
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card customcard row m-3 p-3" >
                    <img src={img2} className="card-img-top mt-2" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
     
    
    
      <div className='container cards col-lg-4 '>
        <div className="cards row " >
             <div className="card-body">
                    {/* Inner cards */}
                    <div class="card pt-1 pb-1 ps-2" style={{background:'orange',width:'150px',border:'none',borderRadius:'0',fontWeight:'bold'}}> Most Popular </div>
                    <div class="card m-2  customcard">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div class="card m-2 customcard ">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text within a card.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text within a card body
                            This is sample text.
                        </div>
                    </div>
                    <br/>
                    <div class="card pt-1 pb-1 ps-2" style={{background:'orange',width:'150px',border:'none',borderRadius:'0',fontWeight:'bold'}}>Editor's picks </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text within a card body
                            This is sample text.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div class="card m-2 customcard">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                    </div> 
             </div>
            </div>  
     </div>
   
     <div className="card customcard mt-3 mb-3 p-3" style={{width:'850px'}} >
                <img src={img} className="card-img-top mt-2" alt="..."/>
             <div className="card-body">
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
            </div>
            </div>

            <div class="card text-center mb-3" >
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link  className='text-uppercase btn btn-primary' to='/details'>
                    More info
                </Link>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
            </div>
    
    </ProductContainer>
    )
}

export default Products


const ProductContainer=styled.footer

`
.mainclass{
  
} 
.card{
    background:#eaf0f6;
    border:none;
   
}

 `