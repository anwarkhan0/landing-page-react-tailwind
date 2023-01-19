import Header from "./components/Header";
import Background from "./assets/Hero.png";
import LukaLine from "./components/ourstory/lukaLine";
import MazeLine from "./components/ourstory/mazeLine";
import Topline from "./components/ourstory/Topline";
import Vector145 from "./components/ourstory/Vector145";
import BottomLine from "./components/ourstory/BottomLine";
import Form from './components/ourstory/Form';

import V1 from "./components/ourstory/V1";
import V4 from "./components/ourstory/V4";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="box-border container m-auto" style={{ background: `url(${Background})` }}>
        <div className="flex justify-end w-full" style={{ height: "900px" }}>
          <div className="w-5/12 sm:invisible"></div>
          <div className="w-7/12 sm:w-full m-auto bg-white">
            <LukaLine />
            <div className="bg-white">
              <div className="text-center text-2xl font-extrabold">Heading three</div>
              <div className="font-bold text-center m-auto p-4 w-8/12">
              Sed vitae pulvinar mi. Suspendisse potenti. In maximus, augue at porta accumsan, justo nibh vulputate risus, non eleifend magna elit ac est. Quisque consequat eget mauris vitae maximus. Quisque sagittis dui nec bibendum pretium. Donec condimentum imperdiet commodo. Suspendisse at fringilla elit. Mauris elit metus, lacinia a fermentum vitae, sodales vel mi. Vivamus tincidunt vitae nulla sit amet molestie.
              </div>
            </div>
            <MazeLine />
          </div>
        </div>

        <div className="flex justify-start w-full">

          <div className="w-1/2  box-border">
            <Topline id="topline" className=""/>

            <V1 className="relative left-56 top-0" />

            <div className="mt-96">
              <div className="text-center text-2xl font-extrabold">Heading three</div>
              <div className="font-bold text-center m-auto p-4 w-8/12">
              Sed vitae pulvinar mi. Suspendisse potenti. In maximus, augue at porta accumsan, justo nibh vulputate risus, non eleifend magna elit ac est. Quisque consequat eget mauris vitae maximus. Quisque sagittis dui nec bibendum pretium. Donec condimentum imperdiet commodo. Suspendisse at fringilla elit. Mauris elit metus, lacinia a fermentum vitae, sodales vel mi. Vivamus tincidunt vitae nulla sit amet molestie.
              </div>
            </div>

            <Vector145 id="vector45" />
            <BottomLine id="bottomline" />
          </div>

          <div className="w-1/2 ">
            <div className="bg-white mt-32">
              <div className="text-center text-2xl font-extrabold">heading two</div>
              <div className="font-bold text-center m-auto p-4 w-8/12">
              Sed vitae pulvinar mi. Suspendisse potenti. In maximus, augue at porta accumsan, justo nibh vulputate risus, non eleifend magna elit ac est. Quisque consequat eget mauris vitae maximus. Quisque sagittis dui nec bibendum pretium. Donec condimentum imperdiet commodo. Suspendisse at fringilla elit. Mauris elit metus, lacinia a fermentum vitae, sodales vel mi. Vivamus tincidunt vitae nulla sit amet molestie.
              </div>

              <V4 className="relative top-24 left-16" />
              
              <div className="mt-96">
              <div className="text-center text-2xl font-extrabold">heading four</div>
              <div className="font-bold text-center m-auto p-4 w-8/12">
              Sed vitae pulvinar mi. Suspendisse potenti. In maximus, augue at porta accumsan, justo nibh vulputate risus, non eleifend magna elit ac est. Quisque consequat eget mauris vitae maximus. Quisque sagittis dui nec bibendum pretium. Donec condimentum imperdiet commodo. Suspendisse at fringilla elit. Mauris elit metus, lacinia a fermentum vitae, sodales vel mi. Vivamus tincidunt vitae nulla sit amet molestie.
              </div>
              </div>

              
            </div>
          </div>

        </div>

        
        {/* container end */}
      </div>

      <div className="w-full ">
          <Form className="" />
        </div>
    </>
  );
}

export default App;
