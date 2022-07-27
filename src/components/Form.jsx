import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState();
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      isClearable
      dateFormat="MMMM d, yyyy"
      onKeyDown={(e) => {
        e.preventDefault();
      }}
    />
  );
};

export default function Form() {
  return (
    <aside>
      <form>
        <div className="row">
          <label htmlFor="name">Your full given name:</label>
          <input id="name" type="text" />
        </div>
        <div className="row jcsb">
          <div className="w40p">
            <label htmlFor="dob">Date of Birth</label>
            <CustomDatePicker />
          </div>
          <div className="w56p">
            <label htmlFor="country">
              Country of residence or citizenship:
            </label>
            <input id="country" type="text" />
          </div>
        </div>
        <div className="row">
          <label htmlFor="school">What school do you plan to attend?</label>
          <input id="school" type="text" />
        </div>
        <div className="row">
          <label htmlFor="study">
            Please take a moment to describe your intended area of study:
          </label>
          <textarea
            name="study"
            id="study"
            rows="7"
            placeholder="Enter details here"
          ></textarea>
        </div>
      </form>
    </aside>
  );
}
