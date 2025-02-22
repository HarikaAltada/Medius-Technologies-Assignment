import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section mortage">
          <h2 className="brand">Better</h2>
          <p>
            Better is a family of companies serving all your homeownership
            needs.
          </p>
          <div className="footer-links">
            <h3>Better <span>Mortgage</span></h3>
            <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>

            <h3>Better <span>Real Estate</span></h3>
            <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>

            <h3>Better <span>Cover</span></h3>
            <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>

            <h3>Better <span>Inspect</span></h3>
            <p>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>

            <h3>Better <span>Settlement Services</span></h3>
            <p>Get transparent rates when you shop for title insurance all in one convenient place.</p>
          </div>
        </div>

        <div className="footer-section resources">
          <h3>Resources</h3>
          <ul>
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Mortgage calculator with PMI</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
            <li>HELOC vs cash-out refinance calculator</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning Center</li>
            <li>FAQs</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: hello@better.com</li>
            <li>Phone: 415-523-8837</li>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>

          <h3>Legal</h3>
          <ul>
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
            <li>Browser Disclaimer</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
