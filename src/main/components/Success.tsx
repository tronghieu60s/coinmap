import React from "react";
import success from "../../assets/icons/success.svg";

export default function Success() {
  return (
    <div className="success">
      <h2 className="success-title">
        <img src={success} alt="success" /> Successful
      </h2>
      <p className="success-text">
        You can now use all features on the platform
      </p>
    </div>
  );
}
