import React from 'react'


function Contact() {
    return (  
      <div className="container">
<div className="contact3 py-5">

 
      <div className="row ">
        <div className="col-lg-5 ms-5">
          <div className="card-shadow text-center" style={{width:'80%'}}>
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="img-fluid" alt='img' />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            <h1 className="font-weight-light mt-2">Get in Touch!</h1>
            <form className="mt-4">
              <div className="row">
                <div className="col-lg-10">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" placeholder="name"/>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="form-group mt-2">
                    <input className="form-control" type="email" placeholder="email address"/>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" placeholder="phone"/>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="form-group mt-2">
                    <textarea className="form-control" rows="3" placeholder="message"></textarea>
                  </div>
                </div>
                <div >
                  <button type="submit" className="btn mt-3 text-white border-0 px-3 py-2" style={{background:'orange'}}><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-11 d-flex justify-content-center">
          <div className="card mt-4 border-0 mb-4">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center  c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt='img'/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Address</h6>
                    <p className="ms-3">601 Sherwood Ave.
                      <br/> San Bernandino</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"alt='img'/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Phone</h6>
                    <p className="ms-2">251 546 9442
                      <br/> 630 446 8851</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"alt='img'/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Email</h6>
                    <p className="ms-3">
                    info@ibluesys.com
                      <br/>123@ibluesys.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
             <div className='col- d-flex justify-content-center'>
                   <iframe src="https://www.google.com/maps/d/u/0/embed?mid=17btSKuZes00ZEgVHdvBUwy0OlNO706Zx&ehbc=2E312F" width="840" height="580" title='maps'></iframe>
                   </div> 
          </div>
        </div>
      </div>
    </div>
 
</div>
    )
}

export default Contact

