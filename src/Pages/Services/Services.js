import React from 'react';
import {Helmet} from "react-helmet";
import Painter from '../painter/painter';
import Service from '../../Assets/services-1.8ebb6117.jpg'
import portrait2 from '../../Assets/portrait-2.8d481ca3.jpg'
import portrait3 from '../../Assets/portrait-3.bf8df984.jpg'
import portrait4 from '../../Assets/portrait-4.92cdd2ec.jpg'
import portrait5 from '../../Assets/portrait-5.ccbb35fd.jpg'

import { NavLink } from 'react-bootstrap';


function Services(props){
    return(
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Morgan Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Home page application" />
       </Helmet>
       <section className='about-page text-white bg-dark-overlay'>
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 text-center about-p'>
            <h2 className='text-center'>Services</h2>
            </div>
        </div>
       </div>
       </section>
        <section className='services m-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-5'>
                    <h2>Service Description</h2>
                    <p>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
                    <NavLink to='/Services'className="button web-btn">Learn More</NavLink>
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                        <img src={Service} alt='services'className='service-img '/>
                    </div>
                </div>
            </div>
        </section>
        <Painter/>
        <section>
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-4 paint-padding">
          <img src={portrait2} className="img-fluid" alt="project"/>
          </div>
          <div className="col-lg-8 paint-padding">
          <img src={portrait3} className="img-fluid" alt="project"/>
          <div className="text-end pt-5">
          <h5>Oil on Canvas of a Little Girl</h5>
          <p>This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
          </div>
          </div>
        </div>
      </div>

        </section>
        <section className='m-3'>
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-8 col-md-6">
          <img src={portrait4} className="img-fluid" alt="project"/>
          <div className="text-left pt-5">
          <h5>Watercolor Portrait</h5>
          <p>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
          </div>
          </div>
          <div className="col-lg-4 col-md-6">
          <img src={portrait5} className="img-fluid" alt="project"/>
          </div>
        </div>
      </div>

        </section>
        </>
    )
}

export default Services;