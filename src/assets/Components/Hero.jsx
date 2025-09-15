import React from "react";
import Logo from "./assets/StyleOutline.svg";
// import logo from 'src/'
function Hero() {
  return (
    <>
      <div className="flex">
        <div className="main flex mt-25 ml-50 h-20 w-140 text-3xl  flex-wrap gap-2 font-tegascraft ">
          <div className="h3s flex flex-wrap gap-2 font-tegascraft tracking-widest">
            <h3 className="text-purple-800">mohammad zaid</h3>
            <h3 className="text-white">is </h3>
            <h3 className="text-purple-800">a web designer</h3>
            <h3 className="text-white">and</h3>
            <h3 className="text-purple-800">front-end developer</h3>
          </div>
          <div className="para text-lg mt-3 font-geistmono text-gray-500">
            <p>
              He crafts responsive websites where technologies meet creativity
            </p>
          </div>
          <div className="btn h-10 pr-3 pl-3 mt-8 flex leading-none items-center text-white border-purple-600 text-lg font-geistmono border">
            <button>Contact me !!</button>
          </div>
        </div>
        <div className="poster">
                <img src={Logo} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Hero;
