import React from "react";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="footerTop">
      <img
        src="https://statics.olx.in/external/base/img/phone-app.webp"
        alt=""
      />
      <div className="footerTop__content">
        <h1>TRY THE OLX APP</h1>
        <h5>
          Buy, sell and find just about anything using <br /> the app on your
          mobile.
        </h5>
      </div>
      <div className="footerTop__sep"></div>
      <div className="footerTop__right">
        <p>GET YOUR APP TODAY</p>
        <div className="footerTop__right-img">
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
  );
};

export default FooterTop;
