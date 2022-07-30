import React from "react";
import "./Contact.css";
import contactImg from "../src/img/phone.jpg";
function Contact() {
  return (
    <div className=" contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong> +8801902438895 </strong> or email
                <strong> mdreayadmia079@gmail.com </strong>
              </p>
            </div>
            <form
              action="https://formspree.io/f/xvolyayq"
              method="POST"
              className="input__box"
            >
              {/* <div className="input__box"> */}
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
                required
              />
              <input
                type="email"
                className="contact email"
                placeholder="Your Email *"
                required
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
                required
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Sand
              </button>
            </form>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
