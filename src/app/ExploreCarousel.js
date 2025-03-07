"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import PowerMiles_Card from "./images/xb2.png";
import selfi from "./images/xb1.png";
import tiga from "./images/xb3.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ExploreCarousel() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides on larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024, // Tablets (max-width: 1024px)
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                },
            },
            {
                breakpoint: 600, // Mobile (max-width: 600px)
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                },
            },
        ],
    };





    return (
        <div  >
            {/* explore crdit card */}
            <div className="flex justify-center my-14" id="cards">
                <div className="container">
                    <div className=" card_bg">
                        <Slider {...settings}>
                            <div className="px-5" >
                                <div className="xplore-box c1" data-aos="fade-up">
                                    <Image className="img-fluid" data-aos="fade-up" src={PowerMiles_Card} alt="" />
                                    <div className="" >
                                        <div className="xplore-txt ct1r">
                                            <p>PowerMiles Credit Card </p>
                                            <p>  Earn miles on every spend & enjoy airport lounge access for seamless travel.</p>
                                        </div>
                                        <div className="xplore-txt-card ct2r">
                                            <p >Features</p>
                                            <ul className="  list-disc">
                                                <li><b>Luxury Metal Card </b>– Premium design with elite benefits.</li>
                                                <li><b>Exclusive Memberships</b> – Enjoy Club Marriott & EazyDiner perks.</li>
                                                <li><b>Global Privileges</b> – 2% Forex markup, 3X rewards on international spends.</li>
                                                <li><b>VIP Travel Access </b>– Complimentary domestic & international lounge access.</li>
                                                <li>Flexible Rewards – 1:1 Miles Transfer & redemption on luxury brands like Apple, Taj & more.</li>
                                            </ul>

                                            <div className="eligibility" >
                                                <p className="text-white pb-3">Eligibility criteria</p>
                                                <ul className="  list-disc">
                                                    <li><b>Fee </b>– Rs. 5,000</li>
                                                    <li> <b>Eligibility</b> – Income of 18 L+</li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="xplore-btn  ctb3 "  >
                                        <a href="#apply-now"><button className="">Apply Now</button></a>
                                        {/* <button className=""></button> */}
                                    </div>

                                </div>
                            </div>
                            <div className="px-5" >
                                <div className="xplore-box c2" data-aos="fade-up">
                                    <Image className="img-fluid" data-aos="fade-up" src={selfi} alt="" />
                                    <div className="xplore-txt ct2r" >
                                        <p>Selfe Credit Card </p>
                                        <p> Apply online instantly & experience 100% digital banking convenience.</p>

                                        <div className="xplore-txt-card ct2r">
                                            <p >Features</p>
                                            <ul className="  list-disc">
                                                <li> <b>Choice of Membership</b> – Pick 2 memberships from Amazon Prime, Hotstar & more.</li>
                                                <li><b>Choice of Rewards</b> – Earn 5X rewards on 2 preferred categories. </li>
                                                <li><b>Choice of Card Style </b>– Select Regular, Eco-friendly Green, or Sleek Metal. </li>
                                                <li><b> Choice of Billing Cycle</b> – Choose from 12th, 16th, or 20th.</li>
                                                <li><b>Tailored Benefits</b> – Customize your card for a truly personal experience. </li>


                                            </ul>

                                            <div className="eligibility">
                                                <p className="text-white pb-3">Eligibility criteria</p>
                                                <ul className="  list-disc">
                                                    <li><b>Fee</b> – Rs.1000 for regular | Additional charges applicable for Green & Metal</li>
                                                    <li><b>Eligibility </b>– Income of 5 L to 18 L</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="xplore-btn ctb3"  >
                                        <a href="#apply-now"><button className="">Apply Now</button></a>
                                        {/* <button className="">Know More</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="px-5">
                                <div className="xplore-box c3" data-aos="fade-up">
                                    <Image className="img-fluid" data-aos="fade-up" src={tiga} alt="" />
                                    <div className="xplore-txt ct3r">
                                        <p>TIGA Credit Card </p>
                                        <p>  Earn miles on every spend & enjoy airport lounge access for seamless travel.</p>
                                    </div>
                                    <div className="xplore-txt-card ct2r">
                                            <p >Features</p>
                                            <ul className="  list-disc">
                                                <li><b>Pay By Three</b> – Auto-convert top merchant transactions into 3-month EMI.</li>
                                                <li><b>3X Rewards</b> – Earn more on UPI & contactless payments.</li>
                                                <li><b>Low Intro APR </b>– 0.99% for the first 3 months.</li>
                                                <li><b>Seamless Spending</b> – Enjoy effortless transactions & EMI benefits.</li>
                                                <li><b>Exclusive Perks</b> – Maximize rewards & savings on everyday spends.</li>
                                              
                                            </ul>

                                            <div className="eligibility">
                                                <p className="text-white pb-3">Eligibility criteria</p>
                                                <ul className="  list-disc">
                                                    <li><b>Fee </b>–Rs.500</li>
                                                    <li> <b>Eligibility</b> – Income of 2.5L to 5L</li>

                                                </ul>
                                            </div>
                                        </div>

                                    <div className="xplore-btn ctb3"  >
                                        <a href="#apply-now"><button className="">Apply Now</button></a>
                                        {/* <button className="">Know More</button> */}
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="text-center mt-14">
                        <p className="why-choose"><span>How It Works?</span></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ExploreCarousel
