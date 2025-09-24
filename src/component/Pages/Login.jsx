import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
function Login() {
  const [showOTPInput, setShowOTPInput] = useState(false);
  const handleGenerateOTP = () => {
    setShowOTPInput(true); // Show input & submit, hide Generate OTP
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleDash = () => {
    navigate("/project");
  };

  return (
    <>
      <div className="login_card_section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="login_form_card">
                <form id="loginForm" method="post" name="loginForm" action="">
                  <h6 className="m-0 text-center">Project Login</h6>

                  {showOTPInput && (
                    <div className="" id="isMsg">
                      <h5>
                        <span>
                          <b className="timer_notes">Important Note !: </b>
                        </span>
                      </h5>
                      <p className="notes_content">
                        To adhere to the enhanced login security and directed by
                        our information security team, we have enabled the
                        Two-Factor authentication (Email) for all login
                        processes. Please share the email IDs associated with
                        each login credential to{" "}
                        <a href="mailto:vfssupport@mioot.com">
                          {" "}
                          vfssupport@mioot.com
                        </a>{" "}
                        and{" "}
                        <a href="mailto:rajkumar@neesoft.com">
                          rajkumar@neesoft.com
                        </a>
                        . We will do the necessary configurations and confirm.{" "}
                        <b>PLEASE IGNORE IF SHARED / CONFIGURED ALREADY.</b>
                        <br />
                        Apologies for the inconvenience.
                      </p>
                    </div>
                  )}
                  <div className="form-group row">
                    <label
                      htmlFor="txtLoginEmail"
                      className="col-sm-12 col-form-label"
                      id="email_id"
                    >
                      Username <span className="star_required">*</span>
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        id="txtLoginEmail"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row" id="divcaptcha">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-12 col-form-label"
                      id="enter_captcha"
                    >
                      Password <span className="star_required">*</span>
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="password"
                        id="txtPassword"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="" id="procedd_card">
                    <div className="form-group row pt-2">
                      <div className="col-sm-12">
                        {!showOTPInput && (
                          <button
                            type="button"
                            className="login-btn w-100"
                            onClick={handleGenerateOTP}
                          >
                            Generate OTP
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {showOTPInput && (
                    <div className="" id="Validate_form">
                      <div className="form-group row">
                        <label
                          for="inputPassword"
                          className="col-sm-12 col-form-label"
                          id=""
                        >
                          Enter the received OTP{" "}
                          <span className="star_required">*</span>
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="password"
                            id="txtPassword"
                            className="form-control"
                          />
                          <span id="timer">Time left : 04:48</span>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <a href="">
                            <button
                              type="button"
                              className="login-btn w-100"
                              onClick={handleDash}
                            >
                              Validate OTP
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Start */}
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="model_title">
            <h6>Confirmation Message</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <p>
              You have an active login session already. Terminate the old
              session?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Model End */}
    </>
  );
}

export default Login;
