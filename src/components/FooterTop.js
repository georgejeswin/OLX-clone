import React from "react";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="container">
      <div className="footerTop row">
        <img
          src="https://statics.olx.in/external/base/img/phone-app.webp"
          alt=""
          className="col-md-4"
        />
        <div className="footerTop__content col-md-4 py-5">
          <h1>TRY THE OLX APP</h1>
          <h5>
            Buy, sell and find just about anything using <br /> the app on your
            mobile.
          </h5>
        </div>
        {/* <div className="footerTop__sep col-md-1"></div> */}
        <div className="footerTop__right">
          <p>GET YOUR APP TODAY</p>
          <div className="footerTop__right-img col-md-3">
            <img
              src="https://statics.olx.in/external/base/img/appstore_2x.webp"
              alt=""
            />
            <img
              src="https://statics.olx.in/external/base/img/playstore_2x.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
