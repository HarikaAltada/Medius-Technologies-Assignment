import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="about-navbar">
        <ul className="about-nav">
          <li className="about-logo" onClick={() => navigate("/")}>
            Better
          </li>
          <li className="about-link">Buy</li>
          <li className="about-link">Refinance</li>

          <li className="about-link" onClick={() => navigate("/mortgage")}>
            Mortgage calculator
          </li>

          <li className="about-link" onClick={() => navigate("/about-us")}>
            About us
          </li>
          <li className="about-link">Better+</li>
        </ul>

        <div className="about-buttons link">
          <button className="about-phone-btn">
            <svg
              className="about-btn"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              class="transition-all ease-in-out group-hover:[&amp;_path]:fill-interactiveForegroundInversePrimary [&amp;_path]:fill-white h-3 w-3 md:h-4 md:w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                fill="black"
              ></path>
            </svg>
          </button>
          <button className="about-sign-in">Sign in</button>
          <button className="about-continue-btn">Continue</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
