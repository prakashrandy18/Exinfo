'use client';
import React from 'react';
import './slider.css';
import Marquee from 'react-fast-marquee';
import Section from '@/components/Section/Section';
const img1 = '/images/brands/one.png';
const img2 = '/images/brands/two.png';
const img3 = '/images/brands/three.png';
const img4 = '/images/brands/four.png';
const img5 = '/images/brands/five.png';
const img6 = '/images/brands/six.png';
const img7 = '/images/brands/seven.png';
const img8 = '/images/brands/eight.png';
const img9 = '/images/brands/nine.png';
const img10 = '/images/brands/ten.png';
function BrandsSlider() {
  return (
    <Section title="Our Top Brands">
      <div className="App">
        <div>
          <Marquee direction="right" speed={100} delay={5}>
            <div className="image_wrapper">
              <img src={img1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img2} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img4} alt="" />
            </div>
            <div>
              <img src={img5} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img6} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img7} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img8} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img9} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img10} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </Section>
  );
}

export default BrandsSlider;
