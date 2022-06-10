import React from "react";
import Project1 from "../../src/sc/E1PNG350x450.png";
import Project2 from "../../src/sc/E2PNGPNG350x450.png";
import Project3 from "../../src/sc/e4.png";
import Project4 from "../../src/sc/EPNG350x450.png";
import Project5 from "../../src/sc/D22PNG350x450.png";
import Project6 from "../../src/sc/p.png";
const Electric = () => {
  return (
    <div>
      <div className="my-16 text-white ">
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-primary ">
            Electric-Parts Wearhouse
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
              <div className="flex flex-col gap-12 lg:flex-row view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <a href="https://electric-parts.web.app/">
                  <button className="mt-5 mb-5 btn btn-secondary ">
                    Live Link
                  </button>
                </a>
                <a href="https://github.com/RiyadMia/Electric-parts-client">
                  <button className="mt-5 mb-5 btn btn-secondary ">
                    Client
                  </button>
                </a>
                <a href="https://github.com/RiyadMia/Electric-parts-server">
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
            ● Electric-parts. is a MERN application where user can order any
            kind of tools and pay with credit card
          </li>
          <li>
            ● Admin and user have different dashboards .Users can see their
            Users can see their order list on the dashboard.
          </li>
          <ol>
            ● Admins have restricted access and they can see, update and manage
            customer's orders and change their status accordingly.
          </ol>
          <h1 className="text-xl font-bold">Technology Used :</h1>
          <li>
            ● React Js, Express Js , MongoDB , Firebase ,Stripe, Heroku, Node
            Js.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Electric;
