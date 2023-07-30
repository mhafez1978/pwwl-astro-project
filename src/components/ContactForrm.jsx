import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// import secret from "../env.json";

// window.SERVICEID = process.env.SERVICEID;
// window.TEMPLATEID = process.env.TEMPLATEID;
// window.PUBLICKEY = process.env.PUBLICKEY;
// window.PRIVATETOKEN = process.env.PRIVATETOKEN;

const serviceId = import.meta.env.PUBLIC_SERVICEID;
const templateId = import.meta.env.PUBLIC_TEMPLATEID;
const publicKey = import.meta.env.PUBLIC_PUBLICKEY;

export const ContactForm = () => {
  const [customer_name, setCustomerName] = useState("");
  const [customer_email, setCustomerEmail] = useState("");
  const [customer_phone, setCustomerPhone] = useState("");
  const [service_requested, setServiceRequested] = useState("");
  const [service_date, setServiceDate] = useState("");
  const [service_time, setServiceTime] = useState("");
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
      <div className="col-lg-12 col-sm-6">
        {successMessageStatus === "d-block" ? (
          <div class="alert alert-success  text-center" role="alert">
            Success, your message was sent, we will be in touch!
          </div>
        ) : (
          <div></div>
        )}
        {errorMessageStatus === "d-block" ? (
          <div class="alert alert-danger text-center" role="alert">
            There was a problem, your message was not sent. Please try again
            later.
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <form ref={form} onSubmit={sendEmail} className="border-1">
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <input
              name="customer_name"
              type="text"
              className="form-control border-1"
              placeholder="Your Name"
              style={{ height: "55px" }}
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              name="customer_email"
              type="email"
              className="form-control border-1"
              placeholder="Your Email"
              style={{ height: "55px" }}
              onChange={(e) => {
                setCustomerEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <div
              className="phone"
              id="customerPhone"
              data-target-input="nearest"
            >
              <input
                name="customer_phone"
                type="text"
                className="form-control border-1"
                placeholder="Phone Number"
                data-target="#customerPhone"
                style={{ height: "55px" }}
                onChange={(e) => {
                  setCustomerPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <select
              id="serviceRequested"
              name="service_requested"
              className="form-select border-1"
              style={{ height: "55px" }}
              onChange={(e) => {
                setServiceRequested(e.target.value);
              }}
              defaultValue={"Select A Service"}
            >
              <option>Select A Service</option>
              <option data-target="#serviceRequested" value="Wedding">
                Wedding Limo
              </option>
              <option data-target="#serviceRequested" value="Bachalore">
                Bachalore/Bachalorette Party
              </option>
              <option data-target="#serviceRequested" value="Prom">
                Prom Night Limo
              </option>
              <option data-target="#serviceRequested" value="Wine Tour">
                Wine Tour Limo
              </option>
              <option data-target="#serviceRequested" value="Party Bus">
                Party Bus
              </option>
              <option data-target="#serviceRequested" value="Sprinter Van">
                Sprinter Van Limo
              </option>
            </select>
          </div>

          <div className="col-12 col-sm-6">
            <div className="date" id="serviceDate" data-target-input="nearest">
              <input
                name="service_date"
                type="text"
                className="form-control border-1 datetimepicker-input"
                placeholder="Service Date"
                data-target="#serviceDate"
                data-toggle="datetimepicker"
                style={{ height: "55px" }}
                onChange={(e) => {
                  setServiceDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="col-12 col-sm-6"
            id="serviceTime"
            data-target-input="nearest"
          >
            <select
              name="service_time"
              className="form-select border-1"
              style={{ height: "55px" }}
              onChange={(e) => {
                setServiceTime(e.target.value);
              }}
              defaultValue={"Service Time"}
            >
              <option>Service Time</option>
              <option data-target="#serviceTime" value="8:00AM">
                08:00 AM
              </option>
              <option data-target="#serviceTime" value="9:00AM">
                09:00 AM
              </option>
              <option data-target="#serviceTime" value="10:00AM">
                10:00 AM
              </option>
              <option data-target="#serviceTime" value="11:00AM">
                11:00 AM
              </option>
              <option data-target="#serviceTime" value="12:00PM">
                12:00 PM
              </option>
              <option data-target="#serviceTime" value="1:00PM">
                01:00 PM
              </option>
              <option data-target="#serviceTime" value="2:00PM">
                02:00 PM
              </option>
              <option data-target="#serviceTime" value="3:00PM">
                03:00 PM
              </option>
              <option data-target="#serviceTime" value="4:00PM">
                04:00 PM
              </option>
              <option data-target="#serviceTime" value="5:00PM">
                05:00 PM
              </option>
              <option data-target="#serviceTime" value="6:00PM">
                06:00 PM
              </option>
              <option data-target="#serviceTime" value="7:00PM">
                07:00 PM
              </option>
              <option data-target="#serviceTime" value="8:00PM">
                08:00 PM
              </option>
              <option data-target="#serviceTime" value="9:00PM">
                09:00 PM
              </option>
              <option data-target="#serviceTime" value="10:00PM">
                10:00 PM
              </option>
              <option data-target="#serviceTime" value="11:00PM">
                11:00 PM
              </option>
              <option data-target="#serviceTime" value="12:00AM">
                12:00 AM
              </option>
              <option data-target="#serviceTime" value="1:00AM">
                01:00 AM
              </option>
              <option data-target="#serviceTime" value="2:00AM">
                02:00 AM
              </option>
              <option data-target="#serviceTime" value="3:00AM">
                03:00 AM
              </option>
              <option data-target="#serviceTime" value="4:00AM">
                04:00 AM
              </option>
              <option data-target="#serviceTime" value="5:00AM">
                05:00 AM
              </option>
              <option data-target="#serviceTime" value="6:00AM">
                06:00 AM
              </option>
              <option data-target="#serviceTime" value="7:00AM">
                07:00 AM
              </option>
            </select>
          </div>
          <div className="col-12">
            <textarea
              id="customerMessage"
              data-target="#customerMessage"
              name="customer_message"
              className="form-control border-1"
              style={{ height: "200px" }}
              placeholder="Please enter your starting address, destination address, and any special instructions or requests"
              onChange={(e) => {
                setCustomerMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Get An Instant Quote
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
