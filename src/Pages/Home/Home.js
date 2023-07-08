import React from 'react'

import brand from "../../Assets/brand-inverse.6c695ccb.png"
import home from "../../Assets/home.eeaa916c.jpg"
import {Helmet} from "react-helmet";
import Painter from '../painter/painter';
import { NavLink } from 'react-bootstrap';




function Home(props){
    return(
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Morgan Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Home page application" />
       </Helmet>
        <section className='banner bg-dark-overlay'>
            <div className='container-fluid'></div>
            <div className='row'>
            <div className='col-lg-12 text-center'>
                <img className='brand-img' src={brand} alt='banner'/>
            </div>
        </div>
        </section>

        <section className='About m-5'>
            <div className='container'> 
            <div className='row'>
                <div className='col-lg-6 py-4'>
                    <h2 className='mb-5'>A Few Words About Me</h2>
                    <p>My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
                <button className='button rounded-5 mt-2 px-5'>Lern More</button>
                </div>
                <div className='col-lg-6 p-5'>
                   <img src={home} className="home-p"alt='home'/>
                </div>
            </div>
            </div>
        </section>
        <Painter/>
        <secion className='services'>
            <div className='text-center'>
                <h2>Services</h2>
                <p className='services-p'>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p>
            </div>
            <div className='container'>
            <div className='row justify-content-center pt-5'>
            <div className="col-lg-3 col-md-6 pt-2">
           <div className="blurd-boxed text-center">
            <i className="fa fa-user icon" aria-hidden="true"></i>
             <h4>Portrait</h4>          
           </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-2">
           <div className="blurd-boxed text-center">
            <i className="fa fa-brands fa-pagelines icon" aria-hidden="true"></i>
             <h4>Landscape</h4>          
           </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-2">
           <div className="blurd-boxed text-center">
            <i className="fa fa-brands fa-apple icon" aria-hidden="true"></i>
             <h4>Stil Life</h4>          
           </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-2">
           <div className="blurd-boxed text-center">
            <i className="fa fa-house icon" aria-hidden="true"></i>
             <h4>Urban</h4>          
           </div>
            </div>
            </div>
            </div>
            <div className="p-5 justify-content-center services">
            <NavLink to="/services" className="button web-btn">View All services</NavLink>
           </div>
        </secion>
        </>
    
    )
}

export default Home;