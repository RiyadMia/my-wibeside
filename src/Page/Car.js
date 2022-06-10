import React from "react";
import Project1 from "../../src/sc/Ca3PNG350x450.png";
import Project2 from "../../src/sc/C2PNG350x450.png";
import Project3 from "../../src/sc/ad.png";
import Project4 from "../../src/sc/p.png";
import Project5 from "../../src/sc/D22PNG350x450.png";
import Project6 from "../../src/sc/EPNG350x450.png";
const Car = () => {
  return (
    <div>
      <div className="my-16 text-white">
        <div className="mt-6 text-center">
          <h1 className="mb-5 text-3xl font-bold text-primary ">Car Service</h1>
        </div>

        <ul className="mt-5 ">
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
                <div className="flex flex-col gap-12 lg:flex-row view__more__btn d__flex align__items__center justify__content__center pxy__30">
                  <a href=" https://genius-car-servuces.web.app/">
                    <button className="mt-5 mb-5 btn btn-secondary ">
                      Live Link
                    </button>
                  </a>
                  <a href="https://github.com/RiyadMia/Genius-car-services1">
                    <button className="mt-5 mb-5 btn btn-secondary ">
                      Client
                    </button>
                  </a>

                  <a href="https://github.com/RiyadMia/Genius-car-services-server">
                    <button className="mt-5 mb-5 btn btn-secondary ">
                      Server
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <li>
            <ol>
              ● Car Service is a React application where user can choose their
              service.
            </ol>
            <ol>● User can login with both social and email</ol>
            <ol>● User can reset their password if they forget it.</ol>
            <h1 className="text-xl font-bold ">Technology Used :</h1>
            <ol>● React Js ,Firebase, Bootstrap CSS</ol>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Car;
