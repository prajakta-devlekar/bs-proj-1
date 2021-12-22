import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer className='main-footer '>
            <div className='footer-middle'>
        <div className='container  text-white'>
        <div className='row '>
            {/* column 1 */}
             <div className='col-md-3 col-sm-6'>
            
             <ul className='list-unstyled'>
                 <li>India</li>
                 <li>+91 123 456 789</li>
                 <li>ibluesyspvtltd@gmail.com</li>
             </ul>
             </div>
            {/* column 2 */}
             <div className='col-md-3 col-sm-6'>
            
             <ul className='list-unstyled'>
                 <li><a href='/'>Software Development</a></li>
                 <li><a href='/'>Android Application</a></li>
                 <li><a href='/'>Web pages</a></li>
                 <li><a href='/'>Security</a></li>
             </ul>
             </div>
            {/* column 3 */}
             <div className='col-md-3 col-sm-6'>
            
             <ul className='list-unstyled'>
                 <li><a href='/'>Web Apps</a></li>
                 <li><a href='/'>Software Design</a></li>
                 <li><a href='/'>Maintainence</a></li>
                 <li><a href='/'>Deployment</a></li>
             </ul>
             </div>
            {/* column 4 */}
             <div className='col-md-3 col-sm-6'>
            
             <ul className='list-unstyled'>
                 <li><a href='/'>Branding</a></li>
                 <li><a href='/'>Hosting</a></li>
                 <li><a href='/'>Advertising</a></li>
                 <li><a href='/'>And many more...</a></li>
             </ul>
             </div>
        </div>
        <div className='row  col-5'>
        
                <div className='col-1'>
                    <i className='fab fa-facebook-f'></i>
                </div>
                <div className='col-1'>
                    <i className='fab fa-google-plus-g'></i>
                </div>
                <div className='col-1'>
                    <i className='fab fa-whatsapp'></i>
                </div>
                <div className='col-1'>
                    <i className='fab fa-twitter'></i>
                </div>
                <div className='col-1'>
                     <i className='fab fa-linkedin'></i>
                                     </div>
                <div className='col-1'>
                    <i className='fab fa-snapchat'></i>
                </div>
         </div>
        
       
        <br/>
        {/* Footer Bottom */}
        <div className='footer-bottom'>
            <p className='text-xs-center'>
                &copy;{new Date().getFullYear()} Ibluesys Computech pvt.ltd.   - All Rights Reserved.
            </p>
        </div>
        </div>
        </div>
        </FooterContainer>
       
    )
}

export default Footer

const FooterContainer=styled.footer
` .footer-middle{
    background:var(--mainDark);
    padding-top:3rem;
    padding-bottom:2rem;
}  
.footer-bottom{
 padding-top:2rem;
 font-size:0.8rem;

}  
ul li a{
    color:var(--mainGrey);
    text-decoration:none;
}
ul li a:hover{
color:var(--mainLightGrey);
}
i:hover{
    color:var(--mainBlue);
    cursor:pointer;
} `