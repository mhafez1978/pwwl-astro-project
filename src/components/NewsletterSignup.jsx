import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.PUBLIC_SERVICEID2;
const templateId = import.meta.env.PUBLIC_TEMPLATEID2;
const publicKey = import.meta.env.PUBLIC_PUBLICKEY2;

export const NewsletterSignup = () => {
  const [user_email, setUserEmail] = useState("");
  const [customer_message, setCustomerMessage] = useState("");
  const [successMessageStatus, setSuccessMessageStatus] = useState("d-none");
  const [errorMessageStatus, setErrorMessageStatus] = useState("d-none");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setSuccessMessageStatus("d-block");
        form.current.reset();
      },
      (error) => {
        setErrorMessageStatus("d-block");
      }
    );
  };

  return (
    <>
      <div className="col-12">
        {successMessageStatus === "d-block" ? (
          <div
            class="alert alert-success  text-center"
            role="alert"
            style={{ fontSiz: "12px", width: "300px" }}
          >
            Thank you! You're signed up to the newsletter.
          </div>
        ) : (
          <div></div>
        )}
        {errorMessageStatus === "d-block" ? (
          <div
            class="alert alert-danger text-center"
            role="alert"
            style={{ fontSiz: "12px", width: "300px" }}
          >
            There was a problem, try again later.
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <form ref={form} onSubmit={sendEmail} className="border-1">
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <input
              required
              name="user_email"
              type="email"
              className="form-control border-1"
              placeholder="user@email.com"
              style={{ height: "55px", width: "300px" }}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary py-1 hover:bg-green-500"
              style={{ width: "300px", borderRadius: "4px" }}
              type="submit"
            >
              SignUp
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewsletterSignup;
