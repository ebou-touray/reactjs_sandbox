import React from "react";
import "./Form.css";


const Form = (props) => {
  return (
    <div className="form">
      <form>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone number</label>
          <input
            type="phone"
            name="phonenumber"
            id="phonenumber"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={props.onChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;