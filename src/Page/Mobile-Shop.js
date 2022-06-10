import React from "react";
import Project1 from "../../src/sc/ad.png";
import Project2 from "../../src/sc/MOBILE2PNG350x500.png";
import Project3 from "../../src/sc/MOBILE4PNG350x500.png";
import Project4 from "../../src/sc/MOBILE5PNG350x500.png";
import Project5 from "../../src/sc/ddddd.png";
import Project6 from "../../src/sc/p.png";
const Mobile = () => {
  return (
    <div>
      <div className="my-16 text-white ">
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-primary ">
            Mobile Shop Wearhouse
          </h1>
        </div>
        <h1 className="mb-6 text-3xl font-bold text-orange-600 ">
          Wibeside Ditals
        </h1>

        <div className="project component__space" id="Portfolio">
          <div className="heading">
            <h1 className="mb-5 text-4xl font-bold text-center">
              My Project Summary
            </h1>
            <p className="heading p__color">
              There are many variations of passages of Lorem Ipsum available,
            </p>
            <p className="heading p__color">
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col__3">
                <div className="relative project__box pointer">
                  <div className="relative project__box__img pointer">
                    <div className="project__img__box">
                      <img src={Project1} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
              </div>
              <div className="col__3">
                <div className="relative project__box pointer">
                  <div className="relative project__box__img pointer">
                    <div className="project__img__box">
                      <img src={Project2} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
              </div>
              <div className="col__3">
                <div className="relative project__box pointer">
                  <div className="relative project__box__img pointer">
                    <div className="project__img__box">
                      <img src={Project3} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
              </div>
              <div className="col__3">
                <div className="relative project__box pointer">
                  <div className="relative project__box__img pointer">
                    <div className="project__img__box">
                      <img src={Project4} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
              </div>
              <div className="col__3">
                <div className="relative project__box pointer">
                  <div className="relative project__box__img pointer">
                    <div className="project__img__box">
                      <img src={Project5} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
              </div>
              <div className="col__3">
                <div className="relative project__box pointer">
                  <div className="relative project__box__img pointer">
                    <div className="project__img__box">
                      <img src={Project6} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12  lg:flex-row view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <a href="https://acinment-11.web.app/">
                  <button className="mt-5 mb-5 btn btn-secondary ">
                    Live Link
                  </button>
                </a>
                <a href="   https://github.com/RiyadMia/Acinment-client-11">
                  <button className="mt-5 mb-5 btn btn-secondary ">
                    Clint
                  </button>
                </a>
                <a href="https://github.com/RiyadMia/Acinment-server-11">
                  <button className="mt-5 mb-5 btn btn-secondary ">
                    Server
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-5 ">
          <li>
            ● It’s a MERN application where user can login With social and
            email.
          </li>
          <li>● User can delete ,update ,deliver of this mobile</li>
          <h1 className="text-xl font-bold">Technology Used :</h1>
          <li>
            ● React Js ,Express Js ,MongoDB ,Nodejs , Firebase, Heroku ,
            Bootstrap CSS
          </li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
