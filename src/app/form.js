"use client"

import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function form() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="">
        <div className='md:mx-auto' id='apply-now' >
            <form className="max-w-lg mx-auto px-7">

                <p className="text-center form-title py-8">Request a Call Back</p>

                <div className="mb-5">
                    <input type="text" id="username-success" className="  rounded-full   border  border-gray-500  block w-full p-2 " placeholder="Full Name" />
                </div>
                <div className="mb-5">
                    <input type="text" id="username-error" className="  rounded-full border    border-gray-500  block w-full p-2 " placeholder="Email Id" />
                </div>

                <div className="flex mb-5">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-none border border-e-0 rounded-s-full border-gray-500 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" className="" style={{ width: "20px" }} alt="India Flag" />
                    </span>
                    <input type="number" id="username-error" className="bg-none rounded-s-none border-s-0 rounded-full  border border-gray-500 text-black text-sm  block w-full p-2" placeholder="+ 91 913378738" />
                </div>






                <div className="mb-5 ">
                    <select id="countries" className="bg-none rounded-full  border border-gray-500 text-black text-sm  block w-full p-2.5">

                        <option value={""} selected disabled>Choose card </option>
                        <option>Selfe Credit Card</option>
                        <option>PowerMiIes Credit Card</option>
                        <option>TIGA Credit Card</option>
                    </select>
                </div>

                <div className=" flex ms-1">
                    <div className="g-recaptcha" data-sitekey="6Lc63uEqAAAAAKBU2oqCPEP_kaEguA0QGexjYYFX"></div>

                </div>
                <div className="text-center"  data-aos="fade-left">
                    <button className="form_sumbit_btn rounded-full">Submit</button>
                </div>

            </form>
        </div>
        </div>
    )
}

export default form
