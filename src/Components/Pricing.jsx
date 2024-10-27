import { useState } from "react";
import check from "../assets/images/icon-check.svg";
import slider from "../assets/images/icon-slider.svg";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

export default function Pricing() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle((prev) => !prev)

  return (
    <div className="font-body bg-back-image bg-cover bg-center h-screen w-full flex justify-center items-start">
      <div className="flex flex-col justify-center items-center w-96">
        <div className="flex flex-col space-y-3 items-center mt-20">
          <h3 className="text-neutral-dsaturatedblue text-2xl font-bold ">
            Simple, traffic-based pricing
          </h3>
          <p className="text-neutral-grayishblue text-xs font-medium">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        <div className="bg-neutral-white rounded-sm w-full px-7 py-4 flex flex-col mt-16">
            <div className="flex justify-between items-center ">
                <p className="text-neutral-grayishblue text-sm font-semibold uppercase">100k Pageviews</p>
                <p className="text-neutral-dsaturatedblue text-3xl font-bold flex justify-center items-center">$16.00 <span className="text-neutral-grayishblue text-sm font-semibold">/month</span></p>
            </div>

            <div className="slide"></div>

            <div className="flex space-x-3 justify-center items-center mt-6 ">
                <p className="billing">Monthly Biling </p>
                <div onClick={handleToggle} className="cursor-pointer">
                {toggle ? 
                (<FaToggleOn className="bg-neutral-lgrayishbluetbg rounded-full w-11 text-neutral-white h-6"/>)
                : 
                (<FaToggleOff className="bg-neutral-lgrayishbluetbg rounded-full w-11 text-neutral-white h-6"/>)
                }
                </div>
                <div className="flex space-x-2 items-center">
                <p className="billing">Yearly Biling </p>
                <p className="bg-primary-lgrayishred rounded-full text-primary-lightred text-xs font-semibold px-1 py-0">25% discount</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col space-y-3 items-start">
                <div className="flex space-x-3 items-center">
                    <div><img className="w-3" src={check} alt="" /></div>
                    <p className="check">Unlimited websites</p>
                </div>

                <div className="flex space-x-3 items-center">
                    <div><img className="w-3" src={check} alt="" /></div>
                    <p className="check">100% data ownership</p>
                </div>

                <div className="flex space-x-3 items-center">
                    <div><img className="w-3" src={check} alt="" /></div>
                    <p className="check">Email reports</p>
                </div>
            </div>

            <div>
              <button className="btn">Start my trial</button>
            </div>
            </div>


        </div>


      </div>
    </div>
  );
}
