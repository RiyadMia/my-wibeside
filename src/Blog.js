import React from "react";
import "./Blog.css";
import Blog1 from "../src/img/portfolio-1.jpg";
import Blog2 from "../src/img/portfolio-4.jpg";
import Blog3 from "../src/img/blog-03.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading"> Comming Soon</h1>
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
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="absolute Blog__meta">
                <h5 className="project__text">Comming Soon</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="relative project__box pointer">
              <div className="relative project__box__img pointer">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="absolute Blog__meta">
                <h5 className="project__text">Comming Soon</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="relative project__box pointer">
              <div className="relative project__box__img pointer">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="absolute Blog__meta">
                <h5 className="project__text">Comming Soon</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
