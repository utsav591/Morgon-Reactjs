import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';



function Contact(props){

    const[thankuMessage,setThankuMessage]=useState(false);

    function formsubmit(e){
        e.preventDefault();
        setThankuMessage(true);
        setTimeout(()=>{
            setThankuMessage(false);
    
        },3000);
        e.target.reset();
    }

    return(
        <><Helmet>
        <meta charSet="utf-8" />
        <title>Morgan Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Home page application" />
       </Helmet>
       <section className='about-page text-white bg-dark-overlay'>
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 text-center about-p'>
            <h2 className='text-center'>Contact</h2>
            </div>
        </div>
       </div>
       </section>
       <section>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>Get In Touch</h2>
                    <form onSubmit={formsubmit}>
                        <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Your Name'/>
                        </div>
                        <div className='mb-3'>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email Address"/>
                        </div>
                        <div className='mb-3'>
                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Your Contact Address"/>
                        </div>
                        <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Your City'/>
                        </div>
                        <div className="mb-3">
                        <textarea className="form-control" id="" placeholder='Your Message'rows="3"/>
                        </div>
                        {thankuMessage ? <span className='text-success text-center my-2'>Thank you for contating us!</span> : null}
                    </form>
                    <Link to='/About'className="button web-btn">Send Messages</Link>
                </div>
                <div className='col-lg-6'>
                    <h2>Our Address</h2>
                    <div>
                <ul className="fa-ul">
                  <li className="mb-4"><span className="fa-li"><i className="fa fa-building"></i></span> 
                  <span className="add_text">2130 Fulton Street, San Diego, CA 94117-1080 USA</span>
                  </li>
                  <li className="mb-4"><span className="fa-li"><i className="fa fa-phone-square"></i></span> 
                  <span className="add_text">1-800-1234-567</span>
                  </li>
                  <li className="mb-4"><span className="fa-li"><i className="fa fa-envelope"></i></span> 
                  <span className="add_text">info@demolink.org</span>
                  </li>
              </ul>
              
                    </div>
                    <div>
                        
                        <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!18.982848,72.8291464,16z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce5eacba3333:0x2b239ed35cf1577f!8m2!3d18.9854394!4d72.834562!16zL20vMGIwczdw?"/>
                    </div>
                </div>
            </div>
        </div>
       </section>
        </>
    )
}

export default Contact;