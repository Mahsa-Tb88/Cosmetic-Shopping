import React, { useState } from "react";
import "./contactus.css";
import { FaEnvelope } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Contact() {
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      title: "",
      phone: "",
      province: "",
      country: "Canada",
      email: "",
      fax: "",
    },
  });
  const { errors, isSubmitting } = formState;
  const [isSendForm, setIssendForm] = useState(false);
  async function onSubmit(data) {
    setIssendForm(true);
  }
  function backHandler() {
    setIssendForm(false);
  }
  return (
    <div className="contact">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="container-column">
        <div className="row gx-5 col-overlay">
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid   ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
        </div>
      </div>

      <div className="container-contact p-0">
        <main className="main">
          <div className="contact-us">
            <div className="contact-us-desc">
              <h2 className="title-contact">Contact Us</h2>
              <p className="contact-desc">
                Beautya Client Service Center Is Happy to Help You With Any
                Questions You May Have Regarding Our Products And Corporate
                Information.
              </p>
              <p>
                Contact Us by Phone: 1-802-526-2463 Monday to Friday, 9am to
                9pm, and Saturday-Sunday, 9am to 6pm Or Fill in The Form Below
                to Send Us An Email.
              </p>
              <small className="text-small">
                Please fill in this form to send us your inquiry. We'll be more
                than happy to help and will reply to you as soon as possible.
              </small>
            </div>
            <div className="contact-us-form">
              <div className="contact-us-form-header">
                <h3 className="contact-us-form-title d-flex justify- align-items-center">
                  <span className="contact-us-title-envelope">
                    <FaEnvelope />
                  </span>
                  <span className="contact-us-title-title">Write Us</span>
                </h3>
                <span className="contact-us-form-dropleft">
                  <i className="fa fa-caret-right"></i>
                </span>
              </div>
              {isSendForm ? (
                <div className="">
                  <h3 className="fs-1 text-darkmood">Your Form is Submited</h3>
                  <button
                    className="backbtn  fs-3"
                    onClick={() => backHandler()}
                  >
                    Back
                  </button>
                </div>
              ) : (
                <form
                  className="form form-contact-container"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <h3 className="form-info-title text-darkmood">
                      Your information
                    </h3>
                    <div className="form-info-container">
                      <div>
                        <div className="form-address">
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Title"
                              {...register("title", {
                                required: "You must enter a title ",
                              })}
                            />
                            {errors.title && (
                              <p className="errors">{errors.title.message}</p>
                            )}
                          </div>
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Phone Number"
                              {...register("phone", {
                                required: "You must enter a phoneNumber",
                              })}
                            />
                            {errors.phone && (
                              <p className="errors">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>
                        <div className="form-name">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-firstName"
                          />
                          <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-address">
                          <div className="form-email">
                            <input
                              type="text"
                              placeholder="Province"
                              {...register("province", {})}
                            />
                          </div>
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Country"
                              {...register("country")}
                            />
                          </div>
                        </div>

                        <div className="form-address">
                          <div className="form-email">
                            <input
                              type="text"
                              placeholder="Email Address"
                              {...register("email")}
                            />
                          </div>
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Fax Number"
                              {...register("fax")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <h3 className="form-title-request text-darkmood">
                      Your Request
                    </h3>
                    <div className="form-request-container">
                      <h4 className="text-darkmood">Subject</h4>
                      <div className="form-request-btns">
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Skin type
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Branches
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Special offer and Promotion
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Returns and Refunds
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Product and Stock
                          </label>
                        </div>
                      </div>
                      <textarea
                        className="form-request-text text-darkmood"
                        placeholder="write your text"
                        rows="1"
                        cols="30"
                      ></textarea>
                    </div>
                    <hr />
                    <div className="form-checked">
                      <div className="form-check me-4 fs-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I have read and understood the contact us privacy and
                          policy.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-submit-btn">
                    <button className="fs-3">Send</button>
                  </div>
                </form>
              )}
            </div>
            <p className="contact-us-line"></p>
          </div>

          <div className="items ">
            <div className="row gx-5 mb-5">
              <div className="col-12 mb-5 mb-md-0 col-md-4 ">
                <div className="chat-us  h-100 border border-1 d-flex flex-column justify-content-center align-items-baseline">
                  <h3 className="d-flex justify-content-baseline  aling-items-center ">
                    <span className=" fs-2 ">
                      <IoChatbubbleEllipsesOutline className="icon-item me-2" />
                    </span>
                    <span className="title-item">Chat Online</span>
                  </h3>
                  <div className="content-item mt-3 mb-5 ">
                    <h5 className="fs-3">Looking for personalized advice?</h5>
                    <p className="fs-5 desc-item">
                      The option to chat becomes active when one of our Client
                      Advisors is available.
                    </p>
                    <button className="btn-item w-75 py-2 fs-4">
                      Ask Your Questions
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-5 mb-md-0 col-md-4 ">
                <div className="call-us  h-100 border border-1 d-flex flex-column justify-content-center align-items-baseline">
                  <h3 className="d-flex justify-content-baseline  aling-items-center ">
                    <span className="fs-2">
                      <FaPhoneAlt className="icon-item me-2" />
                    </span>
                    <span className="title-item">Call Us</span>
                  </h3>
                  <div className="content-item mt-3 mb-5 ">
                    <h5 className="fs-3">
                      Our Client Advisors would be delighted to assist you.
                    </h5>
                    <h5 className="fs-3">
                      You may contact us at <span>1-802-526-2463</span>
                    </h5>
                    <p className="fs-5 desc-item">
                      Service available from Monday to Friday from 10 am to 8 pm
                      and Saturday from 10 am to 6 pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-5 mb-md-0 col-md-4 ">
                <div className="msg-us  h-100 border border-1 d-flex flex-column justify-content-center align-items-baseline">
                  <h3 className="d-flex justify-content-baseline  aling-items-center ">
                    <span className="fs-2">
                      <FaRegMessage className="icon-item me-2" />
                    </span>
                    <span className="title-item">Instant Message</span>
                  </h3>
                  <div className="content-item mt-3 mb-5 ">
                    <h5 className="fs-3">
                      Would you like to contact us on an instant messaging app?
                    </h5>
                    <p className="fs-5 desc-item">
                      Our Client Advisors will be delighted to assist you
                    </p>
                    <button className="btn-item w-75 py-2 fs-4">
                      Ask Your Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="logo-group">
            <div className="container-column-logo">
              <div className="row gx-5 col-overlay-logo">
                <div className="col vh-100 ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid   ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid  ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid  ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid  ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid  ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid  ">
                  <div className="inner-col-logo"></div>
                </div>
                <div className="col vh-100 d-none d-md-grid  ">
                  <div className="inner-col-logo"></div>
                </div>
              </div>
            </div>
            <div className="row w-100 gx-5 w-100 py-3">
              <div className="col-6 text-center mb-5 mb-md-0 col-md-3 ">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="logo-img">
                    <div>
                      <img
                        src="http://server.test/uploads/rabbit.png"
                        alt="rabbit"
                      />
                    </div>
                  </div>
                  <span className="logo-text">No tests on animals</span>
                </div>
              </div>
              <div className="col-6 text-center mb-5 mb-md-0 col-md-3 ">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="logo-img">
                    <div>
                      <img
                        src="http://server.test/uploads/leaf.png"
                        alt="leaf"
                      />
                    </div>
                  </div>
                  <span className="logo-text">
                    No animal-derived ingredients
                  </span>
                </div>
              </div>
              <div className="col-6 text-center  col-md-3 ">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="logo-img">
                    <div>
                      <img
                        src="http://server.test/uploads/wheat.png"
                        alt="wheat"
                      />
                    </div>
                  </div>
                  <span className="logo-text">
                    No gluten, or gluten byproducts
                  </span>
                </div>
              </div>
              <div className="col-6 text-center  col-md-3 ">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="logo-img">
                    <div>
                      <img
                        src="http://server.test/uploads/lamp.png"
                        alt="lamp"
                      />
                    </div>
                  </div>
                  <span className="logo-text">Recyclable packaging</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
