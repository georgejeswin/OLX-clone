import React from "react";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className=" footerBottom">
      <div className="footerBottom__left">
        <small className="footerBottom__big">Other Countries</small>
        <small className="footerBottom__small">
          {" "}
          &nbsp; Pakistan - South Africa - Indonesia
        </small>
      </div>
      <div className="footerBottom__right">
        <small className="footerBottom__big">
          Free Classifieds in India .{" "}
        </small>
        <small className="footerBottom__small"> &copy;2006-2021 OLX </small>
      </div>
    </div>
  );
};

export default FooterBottom;
