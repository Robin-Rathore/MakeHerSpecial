import React, { useState, useEffect } from 'react';
import img1L from "../assets/img/img1.jpg"
import img2L from "../assets/img/img2.jpg"
import img3L from "../assets/img/img3.jpg"
import img4L from "../assets/img/img4.jpg"
import img1S from "../assets/img/model1.jpg"
import img2S from "../assets/img/model2.webp"
import img3S from "../assets/img/model3.jpeg"
import img4S from "../assets/img/model4.webp"
import "./Slider.css"
import "./Slider2.js"
const Slider = () => {
    const viewportWidth = window.innerWidth;
  return (
    <div className="carousel1">
        {/* <!-- list item --> */}
        <div className="list1">
            <div className="item1">
                 <img src={ viewportWidth <= 600 ? img1S : img1L}/>
                <div className="content1">
                    <div className="author1">MHS</div>
                    <div className="title1">MAKE HER SPECIAL</div>
                    <div className="topic1">Banarsi Silk Saree</div>
                    <div style={{display:"none"}} className="des1">
                        {/* <!-- lorem 50 --> */}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons1">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item1">
                <img src={ viewportWidth <= 600 ? img2S : img2L}/>
                <div className="content1">
                    <div className="author1">MHS</div>
                    <div className="title1">MAKE HER SPECIAL</div>
                    <div className="topic1">Jaipuri Cotton Saree</div>
                    <div className="des1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons1">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item1">
                    <img src={ viewportWidth <= 600 ? img3S : img3L}/>
                <div className="content1">
                    <div className="author1">MAS</div>
                    <div className="title1">MAKE HER SPECIAL</div>
                    <div className="topic1">Chanderi Silk Saree</div>
                    <div className="des1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons1">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="item1">
                <img src={ viewportWidth <= 600 ? img4S : img4L}/>
                <div className="content1">
                    <div className="author1">MSH</div>
                    <div className="title1">MAKE HER SPECIAL</div>
                    <div className="topic1">Patola Silk Saree</div>
                    <div className="des1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons1">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- list thumnail --> */}
        <div className="thumbnail1" >
            <div className="item1">
                <img src={ viewportWidth <= 600 ? img2S : img2L}/>
                <div className="content1">
                    <div className="title1">
                        Name Slider
                    </div>
                    <div className="description1">
                        Description
                    </div>
                </div>
            </div>
            <div className="item1">
                <img src={ viewportWidth <= 600 ? img3S : img3L}/>
                <div className="content1">
                    <div className="title1">
                        Name Slider
                    </div>
                    <div className="description1">
                        Description
                    </div>
                </div>
            </div>
            <div className="item1">
                <img src={ viewportWidth <= 600 ? img4S : img4L}/>
                <div className="content1">
                    <div className="title1">
                        Name Slider
                    </div>
                    <div className="description1">
                        Description
                    </div>
                </div>
            </div>
            <div className="item1">
                <img src={ viewportWidth <= 600 ? img1S : img1L}/>
                <div className="content1">
                    <div className="title1">
                        Name Slider
                    </div>
                    <div className="description1">
                        Description
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- next prev --> */}

        <div className="arrows1">
            <button id="prev1">&lt;</button>
            <button id="next1">&gt;</button>
        </div>
        {/* <!-- time running --> */}
        <div className="time1"></div>
    </div>
  );
};

export default Slider;
