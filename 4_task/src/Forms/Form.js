import React from "react";
import "./Form.css";

const Form = (props) => {

  return (
    <div className="form-group">
      <div className="form-row">
        <label>
          First name
          <input type="text" id="fname" name="firstname" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Last name
          <input type="text" id="lname" name="lastname" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input type="tel" id="firstname" name="phonenumber" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Message
          <textarea />
        </label>
      </div>
    </div>
  );
};

export default Form;