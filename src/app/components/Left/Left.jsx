import Navbar from "../Navbar/Navbar";
import title from "@assets/Neuron.svg";
import rightArrow from "@assets/rightArrow.svg";
import Image from "next/image";
import './LeftStyles.css';

function Left() {
  return (
    <div className='flex flex-col justify-start items-start w-full pl-12 pt-8 h-full'>
      <div className="flex flex-col justify-between items-start mt-52">
        <Image className="w-[70%]" src={title} alt="tiddies" />

        <p className="text-2xl mt-12">
          Conducting analysis of test reports and brain scans, delivering personalized insights into potential cognitive disease risks.
        </p>

        <div className="flex flex-row items-center justify-between rounded-lg slider w-[75%] mt-14">
          <button className="w-[40%] flex flex-row justify-between items-center bg-gradient-to-r from-[#85B4DB] to-[#948AC4] pl-2 pr-3 py-1 rounded-lg">
            <h1 className="text-2xl text-white font-light pl-1 GetStarted">
              Get Started
            </h1>
            <Image src={rightArrow} alt="" />
          </button>
          <h1 className="text-center text-xl pr-4">
            Prevention is better than cure
          </h1>
        </div>

      </div>
    </div>
  );
}
export default Left;

/*
#85B4DB
100%
#948AC4
100%
*/