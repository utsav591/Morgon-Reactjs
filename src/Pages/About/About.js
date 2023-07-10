import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom"
import Still from "../../Assets/still-life-1.679eb172.jpg"
import Painter from '../painter/painter';


function About(props){
    return(
        <><Helmet>
        <meta charSet="utf-8" />
        <title>Morgan About</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Home page application" />
       </Helmet>
       <section className='about-page text-white bg-dark-overlay'>
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 text-center about-p'>
            <h2 className='text-center'>About</h2>
            </div>
        </div>
       </div>
       </section>
       <section className='about-card p-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-7'>
                    <img src={Still} className='about-img'alt='Potrate'/>
                </div>
                <div className='col-lg-6 col-sm-4'>
                    <h2 className='pb-3'>Few Words About us</h2>
                    <p>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it’s created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.</p>
                    <Link to='/About'className="button web-btn">Learn More</Link>
                </div>
            </div>
        </div>
       </section>
       <Painter/>
        </>
    )
}

export default About;