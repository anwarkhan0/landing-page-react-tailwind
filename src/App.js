// import Header from "./components/header";
import Background from "./assets/Hero.png";
import Text1 from "./components/ourstory/Text1";
import LukaLine from "./components/ourstory/lukaLine";
import MazeLine from "./components/ourstory/mazeLine";
import Topline from "./components/ourstory/Topline";
import Vector145 from "./components/ourstory/Vector145";
import BottomLine from "./components/ourstory/BottomLine";

import V1 from "./components/ourstory/V1";
import V4 from "./components/ourstory/V4";

// import "./components/ourstory/lines.css";
function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="box-border container m-auto" style={{ background: `url(${Background})` }}>
        <div className="flex justify-end w-full" style={{ height: "900px" }}>
          <div className="w-5/12 sm:invisible"></div>
          <div className="w-7/12 sm:w-full m-auto bg-white">
            <LukaLine />
            <div className="bg-white mt-96">
              <div className="text-center text-2xl font-extrabold">Heading three</div>
              <div className="font-bold text-center m-auto p-4 w-8/12">
                Luka and Mazen have been business partners for many years,
                having met in high school and bonded over our shared mentality
                and entrepreneurial spirit. We have always been driven to find
                ways to improve upon existing ideas and create new solutions to
                problems.
              </div>
            </div>
            <MazeLine />
          </div>
        </div>

        <div className="flex justify-start w-full">

          <div className="w-1/2 bg-gray-50 box-border overflow-x-hidden	">
            <Topline id="topline" className=""/>
            <Vector145 id="vector45" />

            <V1 className="relative left-56" />

            <div className="bg-white mt-96">
              <div className="text-center text-2xl font-extrabold">Heading three</div>
              <div className="font-bold text-center m-auto p-4 w-8/12">
                Luka and Mazen have been business partners for many years,
                having met in high school and bonded over our shared mentality
                and entrepreneurial spirit. We have always been driven to find
                ways to improve upon existing ideas and create new solutions to
                problems.
              </div>
            </div>

            <BottomLine id="bottomline" />
          </div>

          <div className="w-1/2 ">
            <div className="bg-white mt-28">
              <div className="text-center text-2xl font-extrabold">heading two</div>
              <div className="font-bold text-center m-auto p-4 w-8/12">
                Luka and Mazen have been business partners for many years,
                having met in high school and bonded over our shared mentality
                and entrepreneurial spirit. We have always been driven to find
                ways to improve upon existing ideas and create new solutions to
                problems.
              </div>

              <V4 />
              
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
