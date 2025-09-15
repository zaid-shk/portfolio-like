import React from "react";
import { ChartNoAxesGantt } from "lucide-react";

function Navbar() {
  return (
    <>
      <div class="nav text-xl font-tegascraft text-gray-600 flex justify-around gap-20 pt-5 items-center ">
        <div class="name ml-7 text-xl flex gap-3">zaid</div>
        <div class="mr-8 text-xl flex sm:hidden md:hidden">
          <ChartNoAxesGantt />
        </div>
        <div class="links hidden sm:flex sm:gap-10 mr-10">
          <div class="flex hover:text-gray-300">
            <h4 class="text-purple-500">#</h4>
            <a href="#">home</a>
          </div>
          <div class="flex hover:text-gray-300">
            <h4 class="text-purple-500">#</h4>
            <a href="#">works</a>
          </div>
          <div class="flex hover:text-gray-300">
            <h4 class="text-purple-500">#</h4>
            <a href="#">about-me</a>
          </div>
          <div class="flex hover:text-gray-300">
            <h4 class="text-purple-500">#</h4>
            <a href="#">Contacts</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
