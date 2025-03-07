"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import banner1 from "./images/banner_1.png";
import banner2 from "./images/banner_2.png";
import banner3 from "./images/banner_3.png";
import mimg from "./images/mbanner_1.png";
import mimg2 from "./images/mbanner_2.png";
import mimg3 from "./images/mbanner_3.png";


function Carousel() {

    const banner = [
        {
            img: banner2,
            mimg: mimg,
            txtHead: "Fly More, Earn More – The Ultimate Travel Credit Card!",
            txt: "Earn miles on every spend, enjoy complimentary lounge access, and travel smarter with exclusive privileges.",
            className: "Bt1",
        },
        {
            img: banner1,
            mimg: mimg2,
            txtHead: "Instant Approval. Unlimited Convenience. 100% Digital!",
            txt: "Apply online, get instant approval, and enjoy cashback on your transactions—no branch visit required!",
            className: "Bt2",
        },
        {
            img: banner3,
            mimg: mimg3,
            txtHead: "Max Rewards, Max Savings – Your Perfect Cashback Companion!",
            txt: "Get up to 5% cashback, exclusive dining offers, and flexible EMI options. Every spend counts!",
            className: "Bt3",
        }
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };
    return (
        <div  >
            <Slider {...settings}>
                {
                    banner.map((item, index) => {
                        return (
                            <div className="sec-banner" key={index}>
                                <div>
                                    <div className=" lg:hidden mx-auto flex justify-center"> <Image className="img-fluid  " src={item.mimg} alt="" />
                                    </div>
                                    <div className="hidden lg:block  "> <Image className="img-fluid mimage" src={item.img} alt="" />
                                    </div>
                                    <div className={` w-lg hidden lg:block banner-txt ${item.className}`}>
                                        <p  >{item.txtHead}</p>
                                        <p className={`pt-2 `}>{item.txt}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>

        </div>
    )
}

export default Carousel
