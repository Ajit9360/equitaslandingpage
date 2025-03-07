import Image from "next/image";
import logo from "./images/E-logo.svg";

import Rewards from "./images/Rewards.svg";

import money from "./images/money.png";
import fire from "./images/fire.png";
import bag from "./images/bag.png";
import man from "./images/man.png";
import Insurance from "./images/insurance.png";
import Form from "./form";
import Carousel from "./Carousel";

import contact from "./images/contact.svg";
import Global from "./images/global.svg";
import limit from "./images/limit.svg";

import ExploreCarousel from "./ExploreCarousel";
export default function Home() {

  return (
    <div className="">
      <div className="flex justify-center bg-zinc-50  mt-4">
        <div className="container  ">
          <div className="row py-1 flex justify-between   items-center top_menu">
            <Image className="img-fluid" src={logo} alt="" />
            <div className="gap-10 flex   center-menu">
              <a href="#cards">Cards </a>
              <a href="#cards">Eligibility Criteria </a>
              <a href="#Benefits">Benefits  </a>
              <a href="#why-choose">Why Choose Us </a>
            </div>
            <a href="#apply-now"> <button>Apply Now</button></a>
          </div>
        </div>
      </div>
      {/* banner section */}
      <div className="flex justify-center" id="Cards">
        <div className="container ">
          <div className="sec-banner">
            <Carousel />
            <div className=" w-sm     form_cont my-10   lg:my-10 rounded-md">
              <Form />
            </div>
          </div>
        </div>
      </div>
      {/* y choose as */}
      <div className="flex justify-center my-5 lg:my-10" id="why-choose">
        <div className="container">
          <p className="why-choose"><span>Why Choose Equitas <br /> Credit Cards?</span></p>
        </div>
      </div>
      <div className="flex justify-center cbg">
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:10 lg:gap-10">
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={Rewards} alt="" />
                <div className="y-box-txt">
                  <p>Exciting Rewards & Benefits: </p>
                  <p>  Earn miles, cashback, and exclusive privileges on every transaction.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={contact} alt="" />
                <div className="y-box-txt">
                  <p>Contactless & Secure:
                  </p>
                  <p>  Enjoy seamless and secure payments with tap-and-go technology.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={Global} alt="" />
                <div className="y-box-txt">
                  <p>Global Acceptance:
                  </p>
                  <p>    Use your card worldwide and unlock premium perks wherever you go.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={limit} alt="" />
                <div className="y-box-txt">
                  <p>Custom Credit Limits:
                  </p>
                  <p>   Get personalized credit limits that adapt to your financial needs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 lg:mt-10">
            <p className="why-choose"><span>Explore Our Credit Card Range</span></p>
          </div>
        </div>
      </div>
      <div className="">
        <ExploreCarousel />
      </div>

      {/* How It Works? */}
      <div className="flex justify-center my-5 lg:my-10">
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-10">
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Choose Your Card</span></p>
                  <p>Compare and select the best card for your lifestyle.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Apply Online</span></p>
                  <p>Fill out the simple application form with minimal documentation.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Get Instant Approval</span></p>
                  <p>Get quick approval and start using your card.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Start Enjoying Benefits</span></p>
                  <p>Earn rewards, cashback, and access exclusive perks.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
          </div>
          <p className="why-choose mt-14" id="Benefits"><span>Additional Benefits &  <br />Features</span></p>
        </div>
      </div>
      {/* additional benifits */}
      <div className="flex justify-center my-5 lg:my-10 abg">
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-10">
            <div className="">
              <div className="additional-benifits-box">
                <div className="additional-benifits-txt">
                  <p>Smart EMI Conversion</p>
                  <p>Convert your high-value purchases into easy, flexible EMIs with attractive interest rates.</p>
                </div>
                <div className="flex justify-center mt-5"><Image className="img-fluid " src={money} alt="" /></div>
              </div>
            </div>
            <div className="">
              <div className="additional-benifits-box">
                <div className="additional-benifits-txt">
                  <p>Fuel & Utility Payment Benefits</p>
                  <p>Enjoy surcharge waivers on fuel spends and cashback on utility bill payments.</p>
                </div>
                <div className="flex justify-center mt-5"><Image className="img-fluid " src={bag} alt="" /></div>
              </div>
            </div>
            <div className="">
              <div className="additional-benifits-box">
                <div className="additional-benifits-txt">
                  <p>Exclusive Lifestyle & Shopping Privileges</p>
                  <p>Avail special discounts on top brands, dining, movie tickets, and e-commerce platforms..</p>
                </div>
                <div className="flex justify-center mt-5"><Image className="img-fluid " src={fire} alt="" /></div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">

            <div className="">
              <div className="insurance-box relative">
                <div className="flex gap-1 ">
                  <div className="w-84 insurance-box-txt ">
                    <p>Comprehensive Insurance Coverage</p>
                    <ul className="list-disc ">
                      <li>Travel insurance covering lost baggage, trip cancellations, and flight delays.</li>
                      <li>Purchase protection on gadgets and high-value items bought using your card.</li>
                      <li>Fraud protection against unauthorized transactions.</li>
                    </ul>
                  </div>

                  <Image className="img-fluid w-3xs absolute bottom-0 right-0" src={Insurance} alt="" />


                </div>
              </div>
            </div>
            <div className="">
              <div className="insurance-box relative">
                <div className="flex gap-1 ">
                  <div className="w-xs insurance-box-txt ">
                    <p>24/7 Customer Support & Assistance</p>
                    <ul className="list-disc ">
                      <li>24/7 Customer Support & Assistance</li>
                      <li>Easy dispute resolution and emergency card blocking services..</li>
                    </ul>
                  </div>

                  <Image className="img-fluid w-xs absolute bottom-0 right-0" src={man} alt="" />


                </div>
              </div>
            </div>
          </div>

          <hr className="mt-3 lg:mt-12 w-full" style={{ color: "#A8A8A8" }} />
          <div className="   flex justify-between   items-center mt-5 footer_cam">
            <div className="ri8s">Allrights reserved © 2024</div>
            <div>
              <p className="powered flex my-10">Powered By <span className="flex px-1"><img style={{ width: "25px" }} src="https://www.tuskmelon.com/wp-content/uploads/2022/06/image-14.png" alt="" /><b>Tuskmelon</b></span></p>
            </div>
            <div >
              <p className="tc">Privacy policy|Terms of use</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
