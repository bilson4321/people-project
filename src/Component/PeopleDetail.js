import React from "react";
import "./PeopleDetail.css";

const PeopleDetail = (props) => {
  return (
    <div className="container">
      <div className="image-holder">
        <img
          alt="Profile"
          className="profile-image"
          src={props.profile.profileImage}
        ></img>
        <div className="close-button" onClick={() => props.closeFunction()}>
          X
        </div>
      </div>
      <div>
        <h2>Details</h2>
        <label>Name : </label>
        <span>{props.profile.firstName} </span>
        <span>{props.profile.lastName}</span>
        <br />
        <label>Phone : </label>
        <span>{props.profile.phone}</span>
        <br />
        <label>Email : </label>
        <span>{props.profile.email}</span>
        <br />
        <label>Address : </label>
        <span>
          {props.profile.address.city}, {props.profile.address.state},{" "}
          {props.profile.address.country} <br />
          {props.profile.address.zipCode}, {props.profile.address.countryCode},{" "}
          {props.profile.address.streetAddress}
        </span>
      </div>
    </div>
  );
};

export default PeopleDetail;
