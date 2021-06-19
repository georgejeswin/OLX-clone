import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <table>
        <thead>
          <tr>
            <th>POPULAR LOCATIONS</th>
            <th>TRENDING LOCATIONS</th>
            <th>ABOUT US</th>
            <th>OLX</th>
            <th>FOLLOW US</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kolkata</td>
            <td>Bhubaneshwar</td>
            <td>About OLX Group</td>
            <td>Help</td>
            <td className="td__items">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
            </td>
          </tr>
          <tr>
            <td>Mumbai</td>
            <td>Hyderabad</td>
            <td>Careers</td>
            <td>Sitemap</td>
            <td></td>
          </tr>
          <tr>
            <td>Chennai</td>
            <td>Chandigargh</td>
            <td>Contact us</td>
            <td>Legal & Privacy Information</td>
            <td></td>
          </tr>{" "}
          <tr>
            <td>Pune</td>
            <td>Nashik</td>
            <td>OLX People</td>
            <td></td>
            <td>
              <img
                src="https://statics.olx.in/external/base/img/appstore.webp"
                alt=""
              />
              <img
                src="https://statics.olx.in/external/base/img/playstore.webp"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Waah Jobs</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
