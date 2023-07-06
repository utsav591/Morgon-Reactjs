import React from 'react'
import Project1 from "../../Assets/project-1.f69444ac.jpg";
import Project2 from "../../Assets/project-2.9a687ff6.jpg"
import Project3 from "../../Assets/project-3.1b5bb79c.jpg"
import Project4 from "../../Assets/project-4.d88d880a.jpg"
import Project5 from "../../Assets/project-5.67412d81.jpg"
import Project6 from "../../Assets/project-6.0586d65a.jpg"

function Painter(props){
    return(
        <>
        <section className='Painting bg-body-tertiary'>
        <h2 className='text-center w-3'>My Painting</h2>
            <div className='container'>
                
                <div className='row justify-content-between align-items-end'>
                    <div className='col-lg-4'>
                    <div className="card shadow mb-5 bg-white rounded  paint-padding" >
                    <img src={Project1} className="painter-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sea Storm</h5>
                        <p className="card-text">This painting is one of my latest works on sea and ocean topics.</p>
                    </div>
                    </div>
                  </div>
                    <div className='col-lg-4'>
                    <div className="card shadow mb-5 bg-white rounded  paint-padding" >
                    <img src={Project4} className="painter-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Ruins of Ancient Fortress</h5>
                        <p className="card-text">When I’ve been to Scotland, I made this painting just in a day.</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className="card shadow mb-5 bg-white rounded paint-padding" >
                    <img src={Project3} className="painter-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Two Lovers</h5>
                        <p className="card-text">This work was finished in two days for my customers from San Diego, CA, who needed something special.</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className="card shadow mb-5 bg-white rounded paint-padding" >
                    <img src={Project5} className="painter-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Birches in Autumn</h5>
                        <p className="card-text">I love painting autumn trees and this work is a perfect example.</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className="card shadow mb-5 bg-white rounded paint-padding" >
                    <img src={Project2} className="painter-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Watercolor Portrait</h5>
                        <p className="card-text">Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className="card shadow mb-5 bg-white rounded paint-padding" >
                    <img src={Project6} className="painter-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Green Landscape</h5>
                        <p className="card-text">Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    )

}

export default Painter;